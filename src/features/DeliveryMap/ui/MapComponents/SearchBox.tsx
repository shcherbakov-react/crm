import cls from './Map.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import React, { useState } from 'react';
import axios from 'axios';
import { Input } from 'shared/ui/Input/Input';
const NOMINATIM_URL = 'https://nominatim.openstreetmap.org/search?';

export const SearchBox = () => {
    const [searchText, setSearchText] = useState('');
    const [listPlace, setListPlace] = useState([]);
    const searchFunc = () => {
        const query = searchText.replace(
            /([А-ЯЁа-яё]+)\s([А-ЯЁа-яё]+),\s([0-9А-ЯЁа-яё]+)/,
            '$3+$1+$2',
        );
        axios
            .get(
                `https://nominatim.openstreetmap.org/search?q=${query}&addressdetails=0&format=json&limit=10`,
            )
            .then((result) => {
                setListPlace(result.data);
            });
    };

    return (
        <div className={classNames(cls.Search)}>
            <div></div>
            <ul className={cls.searchList}>
                {listPlace &&
                    listPlace.map((item) => {
                        return (
                            <div
                                className={cls.searchItem}
                                key={item.display_name}
                            >
                                <div>{item.display_name}</div>
                            </div>
                        );
                    })}
            </ul>
        </div>
    );
};
