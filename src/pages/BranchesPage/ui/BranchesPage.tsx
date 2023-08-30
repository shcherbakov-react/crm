import cls from './BranchesPage.module.scss'
import { classNames } from 'shared/lib/classNames/classNames';
import { BranchesList } from 'feature/BranchesList';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Link } from 'react-router-dom';

interface BranchesPageProps {
    className?: string;
}

export const BranchesPage = (props: BranchesPageProps) => {
    const {
        className,
    } = props;

    return (
        <div className={classNames(cls.branchesPage, {}, [className])}>
            <BranchesList title="Настройки">
                <Link to={'/branches/new'}>
                    <Button theme={ThemeButton.CLEAR}>Добавить</Button>
                </Link>
            </BranchesList>
        </div>
    )
}