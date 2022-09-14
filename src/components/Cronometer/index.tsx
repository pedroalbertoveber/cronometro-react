import React, { ReactElement, useEffect, useState } from 'react';
import { ITarefa } from '../../@types/tarefa';
import { tempoParaSeguros } from '../../common/utils/time';
import Button from '../Button';
import Clock from './Clock';
import styles from './Cronometer.module.scss';

interface Props {
    selecionado: ITarefa | undefined;
    finalizarTarefa: () => void;
}

const Cronometer = ({ selecionado, finalizarTarefa }: Props): ReactElement => {

    const [ tempo, setTempo ] = useState<number | undefined>();

    useEffect(() => {

        if (selecionado?.tempo) {
            setTempo(tempoParaSeguros(selecionado.tempo));
        }

    },[selecionado]);

    const regressiva = (contador: number = 0) => {
        setTimeout(() => {
            if (contador > 0) {
                setTempo(contador - 1);
                return regressiva(contador - 1);
            }

            finalizarTarefa();

        }, 1000);
    };

    return(
        <div className={styles.cronometro}>
            <p className={styles.titulo}>Escolha um card e inicie o cronômetro</p>
            <div className={styles.relogioWrapper}>
                <Clock tempo={tempo}/>
            </div>
            <Button name='Começar!' onClick={() => regressiva(tempo)}/>
        </div>
    );
};

export default Cronometer;
