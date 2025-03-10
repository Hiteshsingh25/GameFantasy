import React, { Suspense } from 'react'

import { Route, Routes } from 'react-router-dom'
import { Routers } from '../routes';
import Header from '../component/Header';


const withSuspense = (Component) => {
    return (
        <Suspense
        // fallback={<FallbackPage />}
        >
            <Component />
        </Suspense>
    );
};

console.log({ Routes })

function MainLayout() {
    return (

        <>
            <Header />
            <Routes>
                {Routers.map((item) => {
                    return (
                        <>
                            <Route key={item.path} path={`/${item.path}`} element={withSuspense(item.element)} />
                        </>
                    )
                })}
            </Routes>
        </>
    )
}

export default MainLayout
