import { createSlice } from '@reduxjs/toolkit';
import { AuthSchema } from '../types/AuthSchema';

const initialState: AuthSchema = {
    login: '',
    // user: null,
    // pass: null,
    // role: null
};

const authSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setLogin(state, action) {
            state.login = action.payload;
            console.log(action.payload)
            // state.pass = action.payload.pass;
            // state.user = action.payload.user;
            // state.role = action.payload.role;
        },
        removeLogin(state) {
            state.login = null;
            // state.pass = null;
            // state.user = null;
            // state.role = null;
        }
    }
});

export const { actions: authActions } = authSlice;
export const { reducer: authReducer } = authSlice;