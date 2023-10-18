import {FC} from 'react'
import {Input} from "shared/ui/Input/Input";
import {InputGroup} from "shared/ui/InputGroup/InputGroup";
import {Dropdown} from "shared/ui/Dropdown/Dropdown";

interface IClientEditForm {

}

const status = [
    {content: 'Активный',},
    {content: 'Отключен',}
]

export const ClientEditForm: FC<IClientEditForm> = ({}) => {
    return (
        <>
            <InputGroup title={'Основная информация'}>
                <Input label={'Фамилия'} type={'text'}/>
                <Input label={'Имя'} type={'text'}/>
                <Input label={'Отчество'} type={'text'}/>
                <Dropdown items={status} trigger={'Выбрать статус'}/>
                <Input label={'Карта лояльности'} type={'text'}/>
            </InputGroup>
            <InputGroup title={'Контактные данные'}>
                <Input label={'Телефон'} type={'text'}/>
                <Input label={'Email'} type={'text'}/>
                <textarea/>

            </InputGroup>
        </>
    )
}