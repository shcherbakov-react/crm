import { CourierListApi, ICourierList } from 'features/CouriersList/api/CourierListApi';
import React, { useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './CourierList.module.scss';

interface CourierListProps {
    panTo : (arg: string[]) => void;
}

export const CourierList: React.FC<CourierListProps> = ({ panTo }) => {
    const [collapse, setCollapse] = useState(false);
    return (
        <div className={cls.couriers}>
            <div className={cls.btn} onClick={() => setCollapse(!collapse)}>
                Курьеры
                <svg
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <circle
                        cx="11"
                        cy="11"
                        r="10"
                        stroke="#141B34"
                        strokeWidth="1.5"
                    />
                    <path
                        d="M7 12.5L10.7 9.725C10.8778 9.59167 11.1222 9.59167 11.3 9.725L15 12.5"
                        stroke="#141B34"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </div>
            <div
                className={classNames(
                    cls.list,
                    { [cls.collapse]: collapse },
                    [],
                )}
            >
                {CourierListApi.map((item: ICourierList) => (
                    <div className={cls.courierItem} key={item.id}>
                        <div>{item.name}</div>
                        <div>{item.status}</div>
                        <div>
                            Работает до
                            {` ${item.worksUpTo}`}
                        </div>
                        <div className={cls.position} onClick={() => panTo(item.position)}>
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M11.3481 17.8058C10.9867 18.1441 10.5037 18.3333 10.0009 18.3333C9.49821 18.3333 9.01515 18.1441 8.65374 17.8058C5.34418 14.6883 0.908969 11.2057 3.07189 6.14968C4.24136 3.41592 7.04862 1.66663 10.0009 1.66663C12.9532 1.66663 15.7605 3.41592 16.93 6.14968C19.0902 11.1994 14.6658 14.699 11.3481 17.8058Z"
                                    stroke="#667085"
                                    strokeWidth="1.5"
                                />
                                <path
                                    d="M12.9163 9.16667C12.9163 10.7775 11.6105 12.0833 9.99967 12.0833C8.38884 12.0833 7.08301 10.7775 7.08301 9.16667C7.08301 7.55584 8.38884 6.25 9.99967 6.25C11.6105 6.25 12.9163 7.55584 12.9163 9.16667Z"
                                    stroke="#667085"
                                    strokeWidth="1.5"
                                />
                            </svg>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
