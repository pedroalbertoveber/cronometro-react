import React, { ReactElement } from 'react';
import { ITarefa } from '../../../@types/tarefa';
import style from './styles.module.scss';

interface Props extends ITarefa {
    selecionaTarefa: (tarefaSelecionada: ITarefa) => void;
}

const Item = ({ tarefa, tempo, id, selecionado, completado, selecionaTarefa }: Props): ReactElement => {
    return (
        <li 
        className={`${style.item} ${selecionado ? style.itemSelecionado : ""} ${completado ? style.itemCompletado : ""}`} 
        onClick={() => !completado && selecionaTarefa({ tarefa, tempo, selecionado, completado, id })}>
            <h3>{tarefa}</h3>
            <span>{tempo}</span>
            {completado && <span className={style.concluido} aria-label="tarefa completada"></span>}
        </li>
    );
};

export default Item;