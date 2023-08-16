import cls from './Input.module.scss'
import { classNames } from 'shared/lib/classNames/classNames';
import { InputHTMLAttributes } from 'react';

type HTMLInputProps = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'value' | 'onChange' | 'readOnly'
>;
interface InputProps extends HTMLInputProps{
    className?: string;
    type?: string;
    id: string;
    onChange?: (value: string) => void;
    placeholder?: string
}
export enum TypeInput {
    "CHECKBOX" = 'checkbox',
    "TEXT" = 'text',
}

export const Input = (props: InputProps) => {
    const {
        type,
        className,
        id,
        onChange,
        placeholder,
    } = props;

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    return (
        <>
            <input onChange={onChangeHandler} placeholder={placeholder} type={type}  id={id} className={classNames(cls.input, { [cls[type]]: true }, [])} />
            <label htmlFor={id}></label>
        </>
    )
}