import cls from './TableAction.module.scss'
import { CSVLink } from 'react-csv'

interface TableExportProps {
    className?: string;
}

export const TableExport = (props: TableExportProps) => {
    const {
        className,
    } = props;

    const headers = [
        { label: "Номер заказа", key: "id" },
        { label: "Точка", key: "outletTitle" },
        { label: "ФИО", key: "initials" },
        { label: "Телефон", key: "phone" },
        { label: "Сумма", key: "sum" },
        { label: "Комментарий", key: "comment" },
    ];

    const data = [
        {
            id: 52354,
            outlet: {
                outletId: 1,
                outletTitle: 'Авокадо',
                outletTitleColor: '#027A48',
            },
            statusId: 2,
            date: 1692008533,
            deliveryTime: 1795119533,
            paymentType: 2,
            initials: 'Павел Андреевич',
            phone: '+79987352563',
            address: 'Михайловск, Гоголя 16, кв. 52',
            district: 'Центр',
            person: 1,
            sum: 2253,
            comment: 'Когда приедите, позвоните, я выйду',
        },
        {
            id: 52355,
            outlet: {
                outletId: 2,
                outletTitle: 'Сушитайм',
                outletTitleColor: '#A259FF',
            },
            statusId: 3,
            date: 1692008533,
            deliveryTime: 1795119533,
            paymentType: 0,
            initials: 'Павел Андреевич',
            phone: '+79987352563',
            address: 'Михайловск, Гоголя 16, кв. 52',
            district: 'Центр',
            person: 1,
            sum: 2253,
            comment: 'Когда приедите, позвоните, я выйду',
        },
    ];

    const csvReport = {
        data: data,
        headers: headers,
        filename: 'order.csv'
    };

    return (
        <CSVLink {...csvReport} separator={";"}>
            <div className={cls.item}>
                <span>Скачать</span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M10.2941 14.0163C10.2485 13.0244 9.57068 13 8.65122 13C7.23483 13 7 13.3384 7 14.6667V16.3333C7 17.6616 7.23483 18 8.65122 18C9.57068 18 10.2485 17.9756 10.2941 16.9837M21 13L19.5365 16.9123C19.2652 17.6374 19.1296 18 18.9148 18C18.7 18 18.5644 17.6374 18.2931 16.9123L16.8296 13M14.7214 13H13.7489C13.3602 13 13.1659 13 13.0126 13.0635C12.4906 13.2795 12.4977 13.7873 12.4977 14.25C12.4977 14.7127 12.4906 15.2206 13.0126 15.4366C13.1659 15.5 13.3602 15.5 13.7489 15.5C14.1375 15.5 14.3318 15.5 14.4851 15.5634C15.0071 15.7795 15 16.2873 15 16.75C15 17.2127 15.0071 17.7205 14.4851 17.9366C14.3318 18 14.1375 18 13.7489 18H12.6897"
                        stroke="#141B34" strokeWidth="1.5" strokeLinecap="round" />
                    <path
                        d="M15 22H10.7273C7.46607 22 5.83546 22 4.70307 21.2022C4.37862 20.9736 4.09058 20.7025 3.8477 20.3971C3 19.3313 3 17.7966 3 14.7273V12.1818C3 9.21865 3 7.73706 3.46894 6.55375C4.22281 4.65142 5.81714 3.15088 7.83836 2.44135C9.09563 2 10.6698 2 13.8182 2C15.6173 2 16.5168 2 17.2352 2.2522C18.3902 2.65765 19.3012 3.5151 19.732 4.60214C20 5.27832 20 6.12494 20 7.81818V10"
                        stroke="#141B34" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path
                        d="M3 12C3 10.1591 4.49238 8.66667 6.33333 8.66667C6.99912 8.66667 7.78404 8.78333 8.43137 8.60988C9.00652 8.45576 9.45576 8.00652 9.60988 7.43136C9.78333 6.78404 9.66667 5.99912 9.66667 5.33333C9.66667 3.49238 11.1591 2 13 2"
                        stroke="#141B34" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>
        </CSVLink>
    )
}