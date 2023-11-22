import { FC } from 'react';
import { StatusBar } from 'features/StatusBar/ui/StatusBar';
import { defaultData } from 'entities/Orders/model/slice/OrderSlice';
import {
    Controller,
    FormProvider,
    SubmitHandler,
    useForm,
} from 'react-hook-form';
import { Input } from 'shared/ui/Input/Input';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import {
    getPaymentStatus,
    OrderSchema,
} from 'entities/Orders/model/types/OrderSchema';
import { InputGroup } from 'shared/ui/InputGroup/InputGroup';
import { Dropdown } from 'shared/ui/Dropdown/Dropdown';
import { MenuItem, Select } from '@mui/material';
import { styled } from '@mui/material/styles';
import cls from './Order.module.scss';

export const Order: FC = () => {
    const { handleSubmit, control, reset } = useForm<Partial<OrderSchema>>({
        defaultValues: {
            initials: defaultData.initials,
            person: defaultData.person,
            paymentType: defaultData.paymentType,
        },
    });

    const StyledSelect = styled(Select)`
        width: 250px;
        height: 40px;
        border-color: #9f9f9f;
        border-radius: var(--radius-base);
        color: var(--token-nelset-base-colors-neutral-800);

        & > div {
            height: 40px;
            padding: 0;
        }
    `;

    const onSubmit: SubmitHandler<OrderSchema> = (data) => console.log(data);

    return (
        <>
            <StatusBar activeStatusId={3} />
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={cls.info}>
                    <div className={cls.main}>
                        <InputGroup title="Основная информация">
                            <Controller
                                name="initials"
                                control={control}
                                rules={{ required: true }}
                                render={({ field }) => (
                                    <Input
                                        type="text"
                                        label="Фамилия"
                                        {...field}
                                    />
                                )}
                            />
                            <Controller
                                name="person"
                                control={control}
                                rules={{ required: true }}
                                render={({ field }) => (
                                    <Input
                                        type="number"
                                        label="Кол-во приборов"
                                        {...field}
                                    />
                                )}
                            />
                            <Controller
                                name="paymentType"
                                control={control}
                                rules={{ required: true }}
                                render={({ field }) => (
                                    <StyledSelect
                                        defaultValue={getPaymentStatus(
                                            defaultData.paymentType,
                                        )}
                                        autoWidth
                                        label="тип"
                                    >
                                        {Array(3)
                                            .fill(3)
                                            .map((item, index) => (
                                                <MenuItem value={index}>
                                                    {getPaymentStatus(index)}
                                                </MenuItem>
                                            ))}
                                    </StyledSelect>
                                )}
                            />
                        </InputGroup>
                    </div>
                </div>
                <Button theme={ThemeButton.CLEAR} type="submit">
                    Редактировать заказ
                </Button>
            </form>
        </>
    );
};
