import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Input, SizeInput } from 'shared/ui/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import { loginActions } from '../../model/slice/loginSlice';
import cls from './LoginForm.module.scss';
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';
import { loginByUsername } from 'features/AuthByUsername/model/services/loginByUsername/loginByUsername';

export const LoginForm = memo(() => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const {
        username, password, isLoading,
    } = useSelector(getLoginState);

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onLoginClick = useCallback(() => {
        // @ts-ignore
        dispatch(loginByUsername({ username, password }));
    }, [dispatch, password, username]);

    return (
        <div className={cls.LoginForm}>
            <div className={cls.wrapper}>
                <h1 className={classNames(cls.title, {}, ['h2'])}>{t('Войти')}</h1>
                <Input
                    width={SizeInput.LG}
                    type="text"
                    className={cls.input}
                    placeholder={t('Введите username')}
                    onChange={onChangeUsername}
                    value={username}
                />
                <Input
                    width={SizeInput.LG}
                    type="text"
                    className={cls.input}
                    placeholder={t('Введите пароль')}
                    onChange={onChangePassword}
                    value={password}
                />
                <Button
                    theme={ThemeButton.CLEAR}
                    className={cls.loginBtn}
                    onClick={onLoginClick}
                    disabled={isLoading}
                >
                    {t('Войти')}
                </Button>
            </div>
        </div>
    );
});
