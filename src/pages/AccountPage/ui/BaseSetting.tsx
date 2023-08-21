import cls from './AccountPage.module.scss'
import { classNames } from 'shared/lib/classNames/classNames';
import { Input, TypeInput } from 'shared/ui/Input/Input';

export const BaseSetting = () => {
    return (
        <div className={classNames(cls.info, {}, ['block'])}>
            <h2 className={classNames(cls.title, {}, ['h2'])}>Настройки</h2>
            <div className={cls.basicSettings}>
                <Input id="name" type={TypeInput.TEXT} placeholder="Сушитайм" label="Название проекта" />
                <Input id="image" type={TypeInput.FILE} label="Логотип" />
                <Input id="color" type={TypeInput.FILE} label="Цвет" />
            </div>
        </div>
    )
}