import cls from './AccountPage.module.scss'
import { classNames } from 'shared/lib/classNames/classNames';
import { Input } from 'shared/ui/Input/Input';


export const BaseSetting = () => {

    return (
        <div className={classNames(cls.info, {}, ['block'])}>
            <h2 className={classNames(cls.title, {}, ['h2'])}>Настройки</h2>
            <div className={cls.basicSettings}>
                <Input id="name" type="text"  placeholder="Сушитайм" label="Название проекта" />
                <Input id="image" type="file"  label="Логотип" />
                <Input id="color" type="file" label="Цвет" />
            </div>
            <div>
                <Input id={'qwe'} type="checkbox"></Input>
            </div>
        </div>
    )
}