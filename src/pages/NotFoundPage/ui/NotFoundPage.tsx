import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './NotFoundPage.module.scss';

export const NotFoundPage = () => {
    const { t } = useTranslation();
    return (
        <>
            <div className={classNames(cls.NotFoundPage, {}, ['content'])}>
                {t('Страница не найдена')}
            </div>
        </>
    );
};
