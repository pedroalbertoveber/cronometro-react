import React, { ReactElement } from 'react';
import { ITarefa } from '../../@types/tarefa';
import Item from './Item';
import style from './style.module.scss';

interface Props {
    tarefas: ITarefa[],
    selecionaTarefa: (tarefaSelecionada: ITarefa) => void;
}

const List = ({ tarefas, selecionaTarefa }: Props ): ReactElement => {
    
    return (
        <aside className={style.listaTarefas}>
            <h2>Estudos do dia:</h2>
            <ul>
                {tarefas.map((tarefa) => <Item 
                tarefa={tarefa.tarefa} 
                tempo={tarefa.tempo} 
                id={tarefa.id} 
                selecionado={tarefa.selecionado} 
                completado = {tarefa.completado} 
                key={tarefa.id} 
                selecionaTarefa = {selecionaTarefa}
                />)}
            </ul>
        </aside>
    );
};

export default List;