import React, { Suspense, useEffect } from 'react';
import './styles/index.scss';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { userActions } from 'entities/User';
import { useTheme } from 'shared/lib/hooks/useTheme/useTheme';
import { classNames } from 'shared/lib/classNames/classNames';

function App() {
    const location = useLocation();
    const dispatch = useDispatch();
    const { theme } = useTheme();
    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);
    const shouldShowSidebar = () => {
        const { pathname } = location;
        return !['/login', '/signup'].includes(pathname);
    };

    if (shouldShowSidebar()) {
        return (
            <div className={classNames('app light', {}, [theme])}>
                <Suspense fallback="">
                    <Sidebar />
                    <div className='content-page'>
                        <Navbar />
                        <AppRouter />
                    </div>
                </Suspense>
            </div>
        )
    }

    return (
        <div className={classNames('app app--clear', {}, [theme])}>
            <Suspense fallback="">
                <div className={'content-page--clear'}>
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
}

export default App;
