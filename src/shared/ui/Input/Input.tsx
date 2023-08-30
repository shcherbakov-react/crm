import cls from './Input.module.scss'
import { classNames } from 'shared/lib/classNames/classNames';
import { forwardRef, InputHTMLAttributes } from 'react';
import { UseFormRegister, FieldValues, useFormContext } from 'react-hook-form'
type HTMLInputProps = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'value' | 'onChange' | 'readOnly'
>;

interface InputProps extends HTMLInputProps {
    className?: string;
    id: string;
    type?: string
    placeholder?: string;
    label?: string
    required?: boolean
}

export enum TypeInput {
    "PASSWORD" = 'password',
    "TEXT" = 'text',
    "FILE" = 'file',
    "NUMBER" = 'number'
}

export const Input = (props: InputProps) => {
    const {
        className,
        label,
        id,
        type,
        placeholder,
        ...other
    } = props;

    const { register } = useFormContext();

    return (
        <>
            <div className={cls.wrapper}>
                <input type={type} autoComplete="new-password" {...register(id)} {...other} placeholder={placeholder}
                       className={classNames(cls.input, { [cls[type]]: true }, [])} />
                <label htmlFor={id}>{label}</label>
            </div>
        </>
    )
}