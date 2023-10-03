import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import React from 'react';
import Home from '../pages/Home';
import MainLayout from '../layouts/MainLayout';
import Game from '../components/Game';


const AppRouter = () => {

    return (
        <Router>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route element={<Home />} path="/" />
                    <Route element={<Game />} path="/play" />
                </Route>
            </Routes>
        </Router>
    );
};

export default AppRouter;