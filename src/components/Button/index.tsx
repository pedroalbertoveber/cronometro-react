import React, { ReactElement } from 'react';
import style from './style.module.scss';

interface Props {
    name: string;
    type?: "submit" | "button" | "reset" | undefined;
    onClick?: () => void;
}

const Button = ({ name, type, onClick }: Props): ReactElement => {
    return (
        <button className={style.botao} type={type} onClick={onClick}>
            {name}
        </button>
    );
};

export default Button;