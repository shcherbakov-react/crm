import cls from './Checkbox.module.scss'
import { classNames } from 'shared/lib/classNames/classNames';
import Check from 'shared/assets/icons/check.svg'
import { forwardRef, InputHTMLAttributes } from 'react';
import { UseFormRegister, FieldValues, useFormContext } from 'react-hook-form'

type HTMLInputProps = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'value' | 'onChange' | 'readOnly'
>;

interface InputProps extends HTMLInputProps {
    className?: string;
    label?: string
    id: string;
    selectAll?: boolean
}

export const Checkbox = (props: InputProps) => {
    const {
        className,
        id,
        label,
        placeholder,
        selectAll,
        ...other
    } = props;

    const { register } = useFormContext();

    return (
        <>
            <div className={cls.wrapper}>
                <label htmlFor={id}>
                    <input {...register(id)} id={id} type="checkbox" {...other}
                           className={classNames(cls.input, {}, [])} />
                    <span className={cls.input}></span>
                    <Check className={cls.check}/>
                </label>
            </div>
        </>
    )
}
