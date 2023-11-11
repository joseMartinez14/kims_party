import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';

const KimLayout = () => {
    return (
        <>
            <Header />
            <Outlet />
        </>
    );
};

export default KimLayout;