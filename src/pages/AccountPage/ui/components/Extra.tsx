import cls from '../AccountPage.module.scss'
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from 'shared/ui/Button/Button';

export const Extra = () => {

    return (
        <div className={cls.extra}>
            <div className="h2">Дополнительные модули</div>
            <p className={cls.description}>Получите еще больше возможностей с дополнительными расширениями, которые
                помогут решить ваши бизнес-задачи!</p>
            <Button theme={ThemeButton.CLEAR}>Перейти</Button>
        </div>
    )
}