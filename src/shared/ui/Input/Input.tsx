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
    placeholder?: string;
    label?: string
}
export enum TypeInput {
    "CHECKBOX" = 'checkbox',
    "TEXT" = 'text',
    "FILE" = 'file',
}

export const Input = (props: InputProps) => {
    const {
        type,
        className,
        label,
        id,
        onChange,
        placeholder,
    } = props;

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    return (
        <div className={cls.wrapper}>
            <input onChange={onChangeHandler} placeholder={placeholder} type={type}  id={id} className={classNames(cls.input, { [cls[type]]: true }, [])} />
            <label htmlFor={id}>{label}</label>
        </div>
    )
}