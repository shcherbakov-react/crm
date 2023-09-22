import cls from './BranchesPage.module.scss'
import { classNames } from 'shared/lib/classNames/classNames';
import { BranchesList } from 'features/BranchesList';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Link } from 'react-router-dom';
import { TopBar } from 'widgets/TopBar/ui/TopBar';
import { ContentLayout } from 'widgets/ContentLayout/ContentLayout';
import { Modal } from 'shared/ui/Modal/Modal';
import { AddBranch } from 'entities/Branches';
import { useState } from 'react';
import { BlockLayout } from 'shared/ui/BlockLayout/BlockLayout';

export const BranchesPage = () => {

    const [isOpenModal, setIsOpenModal] = useState(false)
    return (
        <>
            <TopBar title={'Точки продаж'} />
            <ContentLayout>
                <div className={classNames(cls.branchesPage, {}, [])}>
                    <BlockLayout>
                        <BranchesList title="Точки продаж" />
                        <Modal isOpen={isOpenModal} title={'Добавить точку'} onClose={() => setIsOpenModal(false)}>
                            <AddBranch />
                        </Modal>
                        <Button onClick={() => setIsOpenModal(true)} theme={ThemeButton.CLEAR}>Добавить</Button>
                    </BlockLayout>
                </div>
            </ContentLayout>
        </>
    )
}