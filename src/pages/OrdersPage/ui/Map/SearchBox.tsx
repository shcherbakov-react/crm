import cls from './Map.module.scss'
import { classNames } from 'shared/lib/classNames/classNames';
import React, { useState } from 'react';
import axios, { AxiosResponse } from 'axios';
interface SearchBoxProps {
    className?: string;
}

const NOMINATIM_URL = 'https://nominatim.openstreetmap.org/search?';

export const SearchBox = (props: SearchBoxProps) => {
    const {
        className,
    } = props;
    const [searchText, setSearchText] = useState('')
    const [listPlace, setListPlace] = useState([]);
    const searchFunc = () => {
        // @ts-ignore
        const query = searchText.replace(
            /([А-ЯЁа-яё]+)\s([А-ЯЁа-яё]+),\s([0-9А-ЯЁа-яё]+)/,
            '$3+$1+$2,+Екатеринбург'
        )
        const response = axios.get(`https://nominatim.openstreetmap.org/search?q=${query}&format=json&limit=1`)
            .then((result) => {
                console.log(result.data);
                // @ts-ignore
                setListPlace(result.data);
            })
            .catch((err) => console.log("err: ", err));
    }

    return (
        <div className={classNames(cls.Search)}>
            <div>
                <input  onChange={(event) => {
                    setSearchText(event.target.value);
                }}/>
                <button
                    onClick={searchFunc}
                >Поиск
                </button>
            </div>
            <ul>
                {/*{listPlace.map((item) => {*/}
                {/*    return (*/}
                {/*        <div key={item.road}>*/}
                {/*            {console.log(item.display_name)}*/}
                {/*            <div>*/}
                {/*                {item.display_name}*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    );*/}
                {/*})}*/}
            </ul>
        </div>
    )
}