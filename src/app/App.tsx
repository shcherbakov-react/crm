import React, { Suspense } from 'react';
import './styles/index.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { useLocation } from 'react-router-dom';

function App() {
    const { theme } = useTheme();
    const location = useLocation();
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
