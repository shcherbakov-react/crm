import { useEffect, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { BaseSetting } from 'pages/AccountPage/ui/components/BaseSetting';
import { FormProvider, useForm } from 'react-hook-form';
import { TopBar } from 'widgets/TopBar/ui/TopBar';
import { ContentLayout } from 'widgets/ContentLayout/ContentLayout';
import { BlockLayout } from 'shared/ui/BlockLayout/BlockLayout';
import { TariffsInfo } from 'pages/AccountPage/ui/components/TarifsInfo';
import { $api } from 'shared/api/api';
import EditIcon from 'shared/assets/icons/edit.svg';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import cls from './AccountPage.module.scss';

export const AccountPage = () => {
    const formMethods = useForm();
    const { handleSubmit } = formMethods;
    const [data, setData] = useState([]);

    const onSubmit = (data) => {
        console.log(data);
    };

    const handleClick = () => {
        console.log('qwe');
    };

    useEffect(() => {
        $api('/companies', {
            method: 'get',
        }).then((res) => {
            setData(res.data._embedded.companies);
        });
    }, []);

    return (
        <>
            <TopBar title="Аккаунт" />
            <ContentLayout>
                <div className={classNames(cls.AccountPage, {}, [])}>
                    <div className={cls.info}>
                        <FormProvider {...formMethods}>
                            <form
                                className={cls.accountWrapper}
                                onSubmit={handleSubmit(onSubmit)}
                            >
                                <BlockLayout>
                                    <BaseSetting />
                                </BlockLayout>
                                <TariffsInfo />
                                <BlockLayout>
                                    <h3 className={classNames('', {}, ['h2'])}>
                                        Юридические лица
                                    </h3>
                                    <div className={cls.branches}>
                                        {data?.map((item) => (
                                            <div
                                                key={item.id}
                                                className={classNames(
                                                    cls.LegalPerson,
                                                    {},
                                                    [],
                                                )}
                                            >
                                                <div className={cls.filial}>
                                                    <div
                                                        className={
                                                            cls.filialInfo
                                                        }
                                                    >
                                                        <div
                                                            className={
                                                                cls.filialTitle
                                                            }
                                                        >
                                                            {item.name}
                                                        </div>
                                                        <div
                                                            className={
                                                                cls.filialStatus
                                                            }
                                                        >
                                                            <span
                                                                className={
                                                                    cls.filialDot
                                                                }
                                                            />
                                                            Работает
                                                        </div>
                                                        <EditIcon
                                                            onClick={
                                                                handleClick
                                                            }
                                                            className={cls.edit}
                                                        />
                                                    </div>
                                                    <div>ИНН: 2623024331</div>
                                                    <div>КПП: 263501001</div>
                                                    <div>
                                                        ОГРН: 1092645001019
                                                    </div>
                                                    <div>
                                                        Фактический адрес:
                                                        355035, Ставропольский
                                                        Край, г. Ставрополь,
                                                        пр-кт Кулакова, д. 18
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <Button theme={ThemeButton.ADD}>
                                        Добавить
                                    </Button>
                                </BlockLayout>
                            </form>
                        </FormProvider>
                    </div>
                </div>
            </ContentLayout>
        </>
    );
};
