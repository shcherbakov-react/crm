import React, { Suspense, useEffect } from 'react';
import './styles/index.scss';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { userActions } from 'entities/User';

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

    if (shouldShowSidebar()) {
        return (
            <div className='app light'>
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
        <div className='app app--clear light'>
            <Suspense fallback="">
                <div className={'content-page--clear'}>
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
}

export default App;
