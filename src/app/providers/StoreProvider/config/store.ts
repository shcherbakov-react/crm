import { configureStore } from '@reduxjs/toolkit'
import { authReducer } from 'feature/Session';
import { StateSchema } from './StateSchema';
export function createReduxStore(initialState?: StateSchema) {
    return configureStore<StateSchema>({
        reducer: {
            auth: authReducer,
        },
        devTools: __IS_DEV__,
        preloadedState: initialState,
    })
}
