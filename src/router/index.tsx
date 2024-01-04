import { BrowserRouter as Router, Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import React, { useMemo, useState } from 'react';
import Home from '../pages/Home';
import MainLayout from '../layouts/MainLayout';
import Game from '../components/Game';
import OnlyPhotos from '../components/OnlyPhotos';
import KimLayout from '../layouts/KimLayout';
import GeneralGameHome from '../components/GeneralGame/Home';
import GeneralGameGame from '../components/GeneralGame/Game';


const storage_key = "QUE_PARIO_MAMA_JUGADORES"

const AppRouter = () => {

    const storevalue = useMemo(() => {
        const storedStringArray = localStorage.getItem(storage_key);
        if (storedStringArray == 'undefined') {
            localStorage.setItem(storage_key, "[]");
        }
        if (storedStringArray && storedStringArray !== undefined) {
            // Parse the JSON string back to an array
            var string_array = JSON.parse(storedStringArray)
            return string_array
        }
    }, []);

    const [players, setPlayers] = useState<string[]>(storevalue);
    const [poolSelected, setPoolSelected] = useState<number>(0);

    const handleNewPlayers = (newPlayers: string[]) => {
        setPlayers(newPlayers)
    }

    const handlePoolChange = (newPool: number) => {
        setPoolSelected(newPool)
    }

    return (
        <Router>
            <Routes>
                <Route element={<KimLayout />}>
                    < Route element={<Home />} path="/kims_party" />
                    <Route element={<Game />} path="/kims_party/play" />
                    <Route element={<OnlyPhotos />} path="/kims_party/photos" />
                </Route>
                <Route element={<MainLayout />}>
                    < Route element={<GeneralGameHome players={players} setPlayers={handleNewPlayers} poolSelected={poolSelected} setPoolSelected={handlePoolChange} />} path="/" />
                    <Route element={<GeneralGameGame players={players} pool={poolSelected} />} path="/play" />
                </Route>
            </Routes>
        </Router >
    );
};

export default AppRouter;