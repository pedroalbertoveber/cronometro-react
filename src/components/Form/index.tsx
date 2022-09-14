import React, { ReactElement, useState } from "react";
import { ITarefa } from "../../@types/tarefa";
import Button from "../Button";
import style from './style.module.scss';
import { v4 as uuidv4 } from 'uuid';

const Form = ({ setTarefas }: { setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>}): ReactElement => {

    const [ tarefa, setTarefa ] = useState<string>("");
    const [ tempo, setTempo ] = useState<string>("");

    const handleAdd = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        setTarefas(tarefasAntigas => [
            ...tarefasAntigas, 
            {
                tarefa: tarefa, 
                tempo: tempo, 
                selecionado: false, 
                completado: false, 
                id: uuidv4()
            }
        ]);
        
        setTarefa('');
        setTempo('00:00:00');
    };

    return (
        <form className={style.novaTarefa} onSubmit={handleAdd}>
            <div className={style.inputContainer}>
                <label htmlFor="tarefa">
                    Adicione um novo estudo
                </label>
                <input 
                type="text" name="tarefa" id="tarefa" placeholder="O que você quer estudar?" required 
                value={tarefa} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTarefa(e.target.value)}
                />
            </div>
            <div className={style.inputContainer}>
                <label htmlFor="tempo">
                    Tempo
                </label>
                <input type="time" step={"1"} name="tempo" id="tempo" min="00:00:00" max="01:30:00" required 
                value={tempo} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTempo(e.target.value)}
                />
            </div>
            <Button name="Adicionar" type="submit" />
        </form>
    );
};

export default Form;