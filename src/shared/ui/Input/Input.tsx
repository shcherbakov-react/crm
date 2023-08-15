import cls from './Input.module.scss'
import { classNames } from 'shared/lib/classNames/classNames';

interface InputProps {
    className?: string;
    type?: string;
    id: string
}

export enum TypeInput {
    "CHECKBOX" = 'checkbox',
    "TEXT" = 'text',
}

export const Input = (props: InputProps) => {
    const {
        type,
        className,
        id
    } = props;

    return (
        <>
            <input type={type} id={id} className={classNames(cls.input, { [cls[type]]: true }, [])} />
            <label htmlFor={id}></label>
        </>
    )
}