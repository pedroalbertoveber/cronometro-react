import React, { useState } from 'react';
import { ITarefa } from '../@types/tarefa';
import Cronometer from '../components/Cronometer';
import Form from '../components/Form';
import List from '../components/List';
import style from './style.module.scss';

function App() {

  const [ tarefas, setTarefas ] = useState<ITarefa[]>([]);
  const [ selecionado, setSelecionado ] = useState<ITarefa>();

  const selecionaTarefa = (tarefaSelecionada: ITarefa): void => {
    setSelecionado(tarefaSelecionada);

    setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => ({
      ...tarefa,
      selecionado: tarefa.id === tarefaSelecionada.id ? true : false,
    })));
  };

  const finalizarTarefa = (): void => {
    if (selecionado) {
      setSelecionado(undefined);
      setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => {
        if (tarefa.id === selecionado.id) {
          return {
            ...tarefa,
            selecionado: false,
            completado: true,
          };
        }

        return tarefa;
      })
    )}
  };

  return (
    <div className={style.AppStyle}>
        <Form setTarefas = {setTarefas}/>
        <List tarefas = {tarefas} 
        selecionaTarefa = {selecionaTarefa}
        />
        <Cronometer 
        selecionado = {selecionado} 
        finalizarTarefa = {finalizarTarefa}
        />
    </div>
  );
}

export default App;
