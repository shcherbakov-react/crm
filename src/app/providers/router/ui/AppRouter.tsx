import React, { Suspense, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AppRoutesProps, routeConfig } from 'shared/config/routeConfig/routeConfig';
import { Loader } from 'shared/ui/Loader/Loader';
import { PageLoader } from 'shared/ui/PageLoader/PageLoader';
import { RequireAuth } from 'app/providers/router/ui/RequireAuth';

const AppRouter = () => {
    const renderWithWrapper = useCallback((route: AppRoutesProps) => {
        const element = (
            <Suspense fallback={
                <PageLoader />}>
                {route.element}
            </Suspense>)
        return (
            <Route
                key={route.path}
                path={route.path}
                element={element}
                // element={route.authOnly ? <RequireAuth>{element}</RequireAuth> : element} // доступ после авторизации
            />
        )
    }, []);

    return (
        < Routes>
            {Object.values(routeConfig).map(renderWithWrapper)}
        </Routes>
    )
}

export default AppRouter;
