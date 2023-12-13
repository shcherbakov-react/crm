import React, { Suspense, useEffect } from 'react';
import './styles/index.scss';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { userActions } from 'entities/User';
import { classNames } from 'shared/lib/classNames/classNames';
import { Loader } from 'shared/ui/Loader/Loader';
import { useThemeContext } from 'app/providers/ThemeProvider/ThemeProvider';

function App() {
    const location = useLocation();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);
    const shouldShowSidebar = () => {
        const { pathname } = location;
        return !['/login', '/signup'].includes(pathname);
    };

    const { theme } = useThemeContext();

    if (shouldShowSidebar()) {
        return (
            <div className={classNames('app', {}, [theme])}>
                <Suspense fallback={<Loader />}>
                    <Sidebar />
                    <div className="content-page">
                        <Navbar />
                        <AppRouter />
                    </div>
                </Suspense>
            </div>
        );
    }

    return (
        <div className={classNames('app app--clear', {}, [theme])}>
            <Suspense fallback={<Loader />}>
                <div className="content-page--clear">
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
}

export default App;
