import cls from './AccountPage.module.scss'
import { classNames } from 'shared/lib/classNames/classNames';
import Edit from 'shared/assets/icons/edit.svg'
export const LegalPerson = () => {
    return (
        <div className={classNames(cls.LegalPerson, {}, ['block'])}>
            <h3 className={classNames(cls.LegalPerson, {}, ['h2'])}>Юридическое лицо</h3>
            <div className={cls.filial}>
                <div className={cls.filialInfo}>
                    <div>ООО «Сушитайм»</div>
                    <div className={cls.filialStatus}>Работает</div>
                    <Edit/>
                </div>
                <div>ИНН: 2623024331</div>
                <div>КПП: 263501001</div>
                <div>ОГРН: 1092645001019</div>
                <div>Фактический адрес: 355035, Ставропольский Край, г. Ставрополь, пр-кт Кулакова, д. 18</div>
            </div>
        </div>
    )
}