import cls from './StoragePage.module.scss'
import { classNames } from 'shared/lib/classNames/classNames';
import { TopBar } from 'widgets/TopBar/ui/TopBar';
import { useEffect, useState } from 'react';
import axios from 'axios';


export const StoragePage = () => {
    // const [isready, setIsready] = useState(false)
    // useEffect(() => {
    //     axios('http://185.22.61.73:8086/login', {
    //         method: 'get',
    //         auth: {
    //             username: 'admin',
    //             password: 'password',
    //         }
    //     }).then((response) => {
    //         setIsready(true)
    //     });
    // }, []);

    // useEffect(() => {
    //     axios('http://185.22.61.73:8086/rest/version/last', {
    //         method: 'get',
    //     }).then((response) => {
    //         console.log('ok', response.data)
    //     })
    //         .catch((err) => {
    //             console.log(err)
    //         });
    // }, [isready]);

    return (
        <>
            <TopBar title={'Склад'} />
            <div className={'content'}>
                Складик
            </div>
        </>
    )
}