import cls from './AddBranch.module.scss'
import { classNames } from 'shared/lib/classNames/classNames';
import { Input, TypeInput } from 'shared/ui/Input/Input';
import { Checkbox } from 'shared/ui/Checkbox/Checkbox';
import { FormProvider, useForm } from 'react-hook-form';
import { Modal } from 'shared/ui/Modal/Modal';
import { useState } from 'react';

interface AddBranchProps {
    className?: string;
}

export const AddBranch = (props: AddBranchProps) => {
    const {
        className,
    } = props;

    const [isOpenSchedule, setIsOpenSchedule] = useState<boolean>(false)

    const formMethods = useForm();
    const {
        register,
        control,
        handleSubmit,
        formState: { errors }
    } = formMethods;

    return (
        <>
            <FormProvider {...formMethods}>
                <form className={classNames(cls.addBranch, {}, [className])}>
                    <Input id={'name'} type={TypeInput.TEXT} label={"Название"} />
                    <Input id={'phone'} type={TypeInput.TEXT} label={"Номер телефона"} />
                    <Input id={'cu rrency'} type={TypeInput.TEXT} label={"Валюта"} />
                    <p onClick={() => setIsOpenSchedule(true)}>График: Пн-пт 09:00 – 22:00, Сб-вс 09:00 – 24:00</p>
                    <div className="h2">Адрес</div>
                    <div className={cls.addressWrap}>
                        <Input id={"country"} type={TypeInput.TEXT} label={"Страна"} />
                        <Input id={"region"} type={TypeInput.TEXT} label={"Регион"} />
                        <Input id={"city"} type={TypeInput.TEXT} label={"Город"} />
                        <Input id={"street"} type={TypeInput.TEXT} label={"Улица"} />
                        <Input id={"appartament"} type={TypeInput.TEXT} label={"Дом"} />
                        <Input id={"ltd"} type={TypeInput.TEXT} label={"Широта"} />
                        <Input id={"lng"} type={TypeInput.TEXT} label={"Долгота"} />
                    </div>
                    <Checkbox id={"isWork"} label={"Работает"} />
                </form>
            </FormProvider>
            <Modal isOpen={isOpenSchedule} onClose={() => setIsOpenSchedule(false)}>
                График работы
            </Modal>
        </>
    )
}