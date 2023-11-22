import cls from './Input.module.scss'
import { classNames } from 'shared/lib/classNames/classNames';
import { forwardRef, InputHTMLAttributes } from 'react';

type HTMLInputProps = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'value' | 'onChange' | 'readOnly'
>;

interface InputProps extends HTMLInputProps {
    className?: string
    id?: string
    type?: string
    width?: SizeInput
    value?: string | number
    placeholder?: string
    label?: string
    onChange?: (value: string) => void
    required?: boolean
}

export enum SizeInput {
    "SM" = 'small',
    "MD" = 'medium',
    "LG" = 'large'
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
        width,
        value,
        onChange,
        placeholder,
        ...other
    } = props;

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    return (
        <>
            <div className={classNames(cls.wrapper, { [cls[width]]: true }, [])}>
                <input value={value} onChange={onChangeHandler} type={type} autoComplete="new-password" {...other}
                       placeholder={placeholder}
                       className={classNames(cls.input, { [cls[type]]: true }, [])} />
                <label htmlFor={id}>{label}</label>
            </div>
        </>
    )
}