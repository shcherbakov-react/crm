import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { TopBar } from 'widgets/TopBar/ui/TopBar';
import { ContentLayout } from 'widgets/ContentLayout/ContentLayout';
import { Modal } from 'shared/ui/Modal/Modal';
import { AddBranch } from 'entities/Branches';
import { useState } from 'react';
import { BlockLayout } from 'shared/ui/BlockLayout/BlockLayout';
import { FormProvider, useForm} from 'react-hook-form';
import cls from './BranchesPage.module.scss';

export const BranchesPage = () => {
    const [isOpenModal, setIsOpenModal] = useState(false);
    const methods = useForm();
    const onSubmit = (data) => console.log('qwe');
    return (
        <>
            <TopBar title="Точки продаж" />
            <ContentLayout>
                <div className={classNames(cls.branchesPage, {}, [])}>
                    <BlockLayout>
                        <FormProvider {...methods}>
                            <form
                                onSubmit={methods.handleSubmit(onSubmit)}
                                className={classNames(cls.addBranch, {}, [])}
                            >
                                <Modal
                                    isOpen={isOpenModal}
                                    title="Добавить точку"
                                    onClose={() => setIsOpenModal(false)}
                                >
                                    <AddBranch />
                                    <Button theme={ThemeButton.CLEAR} type="submit">Сохранить</Button>
                                </Modal>
                            </form>
                        </FormProvider>
                        <Button
                            onClick={() => setIsOpenModal(true)}
                            theme={ThemeButton.ADD}
                        >
                            Добавить
                        </Button>
                    </BlockLayout>
                </div>
            </ContentLayout>
        </>
    );
};
