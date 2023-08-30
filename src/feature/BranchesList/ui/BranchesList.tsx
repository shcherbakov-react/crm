import cls from './BranchesList.module.scss'
import { classNames } from 'shared/lib/classNames/classNames';
import Edit from 'shared/assets/icons/edit.svg'
import { ReactNode } from 'react';

interface BranchesListProps {
    title: string;
    children?: ReactNode;
}

export const BranchesList = (props: BranchesListProps) => {

    const { title, children } = props;
    return (
        <div className={classNames(cls.LegalPerson, {}, ['block'])}>
            <h3 className='h2'>{title}</h3>
            <div className={cls.filial}>
                <div className={cls.filialInfo}>
                    <div className={cls.filialTitle}>ООО «Сушитайм»</div>
                    <div className={cls.filialStatus}>
                        <span className={cls.filialDot}></span>
                        Работает
                    </div>
                    <Edit className={cls.edit} />
                </div>
                <div>ИНН: 2623024331</div>
                <div>КПП: 263501001</div>
                <div>ОГРН: 1092645001019</div>
                <div>Фактический адрес: 355035, Ставропольский Край, г. Ставрополь, пр-кт Кулакова, д. 18</div>
            </div>
            {children}
        </div>
    )
}