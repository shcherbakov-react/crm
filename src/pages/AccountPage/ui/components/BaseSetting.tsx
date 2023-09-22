import cls from '../AccountPage.module.scss'
import { classNames } from 'shared/lib/classNames/classNames';
import { Input } from 'shared/ui/Input/Input';
import { Multiselect } from 'multiselect-react-dropdown';
import { useState } from 'react';
import { InputGroup } from 'shared/ui/InputGroup/InputGroup';

export const BaseSetting = () => {
    const options = [{ name: 'Выбор 1', id: 1 }, { name: 'Выбор  2', id: 2 }]
    const [selectedItems, setSelectedItems] = useState([])
    const addItem = (e, b) => {
        setSelectedItems(prevState => [...prevState, b])
    }

    const removeItem = (e, b) => {
        setSelectedItems(prevState => prevState.filter(item => {
            return item !== b
        }))
    }

    return (
        <div className={classNames(cls.info, {}, [])}>
            <div className={cls.basicSettings}>
                <InputGroup title={'Настройки'}>
                    <Input id="name" type="text" placeholder="Сушитайм" label="Название проекта" />
                    <Input id="image" type="file" label="Логотип" />
                    <Input id="color" type="file" label="Цвет" />
                </InputGroup>
                <Multiselect
                    onSelect={(e, b) => addItem(e, b)}
                    onRemove={(e, b) => removeItem(e, b)}
                    hideSelectedList={false}
                    showCheckbox={true}
                    placeholder={'Добавить'}
                    displayValue={'name'}
                    options={options} />
            </div>
            <div className={'qwe'}>
                {
                    selectedItems.map((item) => (
                        <div key={item.id}>{item.name}</div>
                    ))
                }
            </div>
            <div>
                <Input id={'isChecked'} type="checkbox" />
            </div>
        </div>
    )
}