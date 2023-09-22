import { classNames } from 'shared/lib/classNames/classNames';
import { ReactNode } from 'react';
import cls from './InputGroup.module.scss'

interface InputGroupProps {
    title: string
    children: ReactNode
}

export const InputGroup = ({ title, children }: InputGroupProps) => (
    <div className={cls.inputGroup}>
        <h2 className={classNames(cls.inputGroupTitle, {}, ['h2'])}>{title}</h2>
        <div className={cls.inputWrapper}>
            {children}
        </div>
    </div>
)
