import cls from './LoginForm.module.scss'
import { classNames } from 'shared/lib/classNames/classNames';
import { Input } from 'shared/ui/Input/Input';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import axios from 'axios';
import { FormProvider, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { authActions } from 'feature/Session';
import { useNavigate } from 'react-router-dom';

interface LoginFormProps {
    className?: string;
}

export const LoginForm = (props: LoginFormProps) => {
    const dispatch = useDispatch();
    const formMethods = useForm();
    const {
        register,
        control,
        handleSubmit,
        formState: { errors }
    } = formMethods;
    const {
        className,
    } = props;
    const navigate = useNavigate();

    const onSubmit = (data) => {
        axios(`http://185.22.61.73:8085/auth`, {
            method: 'get',
            auth: {
                username: data.login,
                password: data.password
            }
        })
            .then((response) => {
                dispatch(authActions.setLogin(data.login))
                navigate('/account')
            })
    };

    return (
        <div className={classNames(cls.loginPage, {}, [])}>
            <FormProvider {...formMethods}>
                <form onSubmit={handleSubmit(onSubmit)} className={cls.loginBlock}>
                    <Input id="login" type="text"
                           label="Логин" />
                    <Input id="password" type="password" label="Пароль" />
                    <Button type="submit" theme={ThemeButton.CLEAR}>Войти</Button>
                </form>
            </FormProvider>
        </div>
    )
}