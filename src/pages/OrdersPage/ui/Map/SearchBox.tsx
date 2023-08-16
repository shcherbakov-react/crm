import cls from './Map.module.scss'
import { classNames } from 'shared/lib/classNames/classNames';
import React, { useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import { Input, TypeInput } from 'shared/ui/Input/Input';

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
        const query = searchText.replace(
            /([А-ЯЁа-яё]+)\s([А-ЯЁа-яё]+),\s([0-9А-ЯЁа-яё]+)/,
            '$3+$1+$2'
        )
        axios.get(`https://nominatim.openstreetmap.org/search?q=${query}&addressdetails=0&format=json&limit=10`)
            .then((result) => {
                setListPlace(result.data);
            })
    }

    return (
        <div className={classNames(cls.Search)}>
            <div>
                <Input type={TypeInput.TEXT} placeholder="Адрес" id="searchStreet" onChange={(event) => {
                    setSearchText(event);
                    searchFunc()
                }} />
            </div>
            <ul className={cls.searchList}>
                {listPlace && listPlace.map((item) => {
                    return (
                        <div className={cls.searchItem} key={item.display_name}>
                            <div>
                                {item.display_name}
                            </div>
                        </div>
                    );
                })}
            </ul>
        </div>
    )
}