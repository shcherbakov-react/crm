import { Input, SizeInput, TypeInput } from 'shared/ui/Input/Input';
import { Checkbox } from 'shared/ui/Checkbox/Checkbox';
import React, { useState } from 'react';
import { InputGroup } from 'shared/ui/InputGroup/InputGroup';
import cls from './AddBranch.module.scss';

interface AddBranchProps {
    className?: string;
    id?: string;
}

export const AddBranch = (props: AddBranchProps) => {
    const { className, id } = props;
    const [isOpenSchedule, setIsOpenSchedule] = useState<boolean>(false);
    return (
        <>
            <InputGroup title="Точка продаж">
                <Input
                    width={SizeInput.LG}
                    id="name"
                    type={TypeInput.TEXT}
                    label="Название"
                />
                <Input
                    width={SizeInput.LG}
                    id="ur"
                    type={TypeInput.TEXT}
                    label="Юридическое лицо"
                />
                <Input
                    width={SizeInput.LG}
                    id="phone"
                    type={TypeInput.TEXT}
                    label="Номер телефона"
                />
                <Input
                    width={SizeInput.LG}
                    id="currency"
                    type={TypeInput.TEXT}
                    label="Валюта"
                />
                <p onClick={() => setIsOpenSchedule(true)}>
                    График: Пн-пт 09:00 – 22:00, Сб-вс 09:00 – 24:00
                </p>
            </InputGroup>
            <InputGroup title="Адрес">
                <div className={cls.columns}>
                    <Input
                        width={SizeInput.LG}
                        id="country"
                        type={TypeInput.TEXT}
                        label="Страна"
                    />
                    <Input
                        width={SizeInput.LG}
                        id="region"
                        type={TypeInput.TEXT}
                        label="Регион"
                    />
                </div>
                <Input
                    width={SizeInput.LG}
                    id="city"
                    type={TypeInput.TEXT}
                    label="Город"
                />
                <Input
                    width={SizeInput.LG}
                    id="street"
                    type={TypeInput.TEXT}
                    label="Адрес"
                />
            </InputGroup>
            <InputGroup title="Условия доставки">
                <div className={cls.columns}>
                    <div className={cls.descr}>
                        Минимальная сумма для начала выполнения заказа
                    </div>
                    <Input
                        width={SizeInput.LG}
                        id="currency"
                        type={TypeInput.TEXT}
                        label="Минимальная сумма"
                    />
                </div>
                <div className={cls.columns}>
                    <div className={cls.descr}>
                        Минимальная сумма для бесплатной доставки заказа
                    </div>
                    <Input
                        width={SizeInput.LG}
                        id="currency"
                        type={TypeInput.TEXT}
                        label="Бесплатная доставка"
                    />
                </div>
            </InputGroup>
            <Checkbox id="isWork" label="Работает" />
        </>
    );
};
