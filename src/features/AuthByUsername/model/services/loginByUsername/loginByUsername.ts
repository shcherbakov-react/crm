import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User, userActions } from 'entities/User';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage';

interface LoginByUsernameProps {
    username: string;
    password: string;
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, { rejectValue: string }>(
    'login/loginByUsername',
    async (authData, thunkAPI) => {
        try {
            axios('http://185.22.61.73:8086/auth', {
                method: 'get',
                auth: {
                    username: authData.username,
                    password: authData.password
                }
            })
                .then((response) => {
                    localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
                    thunkAPI.dispatch(userActions.setAuthData(response.data));
                })
        } catch (e) {
            console.log(e);
            return thunkAPI.rejectWithValue('error');
        }
    },
);
