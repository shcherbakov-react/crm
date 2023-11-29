import cls from '../AccountPage.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { Input } from 'shared/ui/Input/Input';
import { Multiselect } from 'multiselect-react-dropdown';
import { useState } from 'react';
import { InputGroup } from 'shared/ui/InputGroup/InputGroup';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher/ui/ThemeSwitcher';
import { Checkbox } from 'shared/ui/Checkbox/Checkbox';

export const BaseSetting = () => {
    const options = [
        { name: 'Выбор 1', id: 1 },
        { name: 'Выбор  2', id: 2 },
    ];
    const [selectedItems, setSelectedItems] = useState([]);
    const addItem = (e, b) => {
        setSelectedItems((prevState) => [...prevState, b]);
    };

    const removeItem = (e, b) => {
        setSelectedItems((prevState) => prevState.filter((item) => item !== b));
    };

    const styles = {
        searchWrapper: {
            width: 300,
            height: 300,
            margin: '50px auto',
            backgroundColor: 'orange',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            fontWeight: 'bold',
        },
    } as const;

    return (
        <div className={classNames(cls.info, {}, [])}>
            <div className={cls.basicSettings}>
                <InputGroup title={'Настройки'}>
                    <Input
                        id="name"
                        type="text"
                        placeholder="Сушитайм"
                        label="Название проекта"
                    />
                    <Input id="image" type="file" label="Логотип" />
                    {/*<Input id="color" type="file" label="Цвет" />*/}
                    <ThemeSwitcher />
                </InputGroup>
            </div>
        </div>
    );
};
