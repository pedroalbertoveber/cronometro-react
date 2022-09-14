import React, { ReactElement, useEffect } from 'react';
import styles from './Clock.module.scss';

interface Props {
    tempo: number | undefined
}

const Clock = ({ tempo = 0 }: Props): ReactElement => {

    const minutos = Math.floor(tempo / 60);
    const segundos = tempo % 60;

    const [ minutoDezena, minutoUnidade ] = String(minutos).padStart(2, "0");
    const [ segundoDezena, segundoUnidade ] = String(segundos).padStart(2, "0");

    return (
        <>
            <span className={styles.relogioNumero}>{minutoDezena}</span>
            <span className={styles.relogioNumero}>{minutoUnidade}</span>
            <span className={styles.relogioDivisao}>:</span>
            <span className={styles.relogioNumero}>{segundoDezena}</span>
            <span className={styles.relogioNumero}>{segundoUnidade}</span>
        </>
    );
};

export default Clock;