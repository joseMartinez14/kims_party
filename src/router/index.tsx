import { BrowserRouter as Router, Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import TestComponent from '../components/test';

const AppRouter = () => {

    return (
        <Router>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route element={<TestComponent />} path="/" />
                </Route>
            </Routes>
        </Router >
    );
};

export default AppRouter;