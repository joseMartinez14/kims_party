import { BrowserRouter as Router, Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import React, { useMemo, useState } from 'react';
import MainLayout from '../layouts/MainLayout';
import Game from '../components/Game';
import OnlyPhotos from '../components/OnlyPhotos';
import KimLayout from '../layouts/KimLayout';
import GeneralGameHome from '../components/GeneralGame/Home';
import GeneralGameGame from '../components/GeneralGame/Game';
import Home from '../pages/Home';
import MulipleGamesHome from '../pages/MultipleGamesHome';
import TruthOrDare from '../pages/TruthOrDare';
import TruthOrDareGame from '../components/MultipleGames/TruthOrDateGame';
import WhatYouRatterHome from '../pages/WhatYouRatterHome';
import WhatYouRatterGame from '../components/MultipleGames/WhatYouRatherGame';
import NeverHaveIEverHome from '../pages/NeverHaveIEverHome';
import NeverHaveIEverGame from '../components/MultipleGames/NeverHaveIEverGame';
import WhosMostLikelyHome from '../pages/WhosMostLikelyHome';
import WhosMostLikelyGame from '../components/MultipleGames/WhosMostLikelyGame';


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
                    < Route element={<GeneralGameHome players={players} setPlayers={handleNewPlayers} poolSelected={poolSelected} setPoolSelected={handlePoolChange} />} path="/que_pario_mama_game" />
                    <Route element={<GeneralGameGame players={players} pool={poolSelected} />} path="/que_pario_mama_game/play" />
                    <Route element={<MulipleGamesHome />} path="/" />
                    <Route element={<TruthOrDare players={players} setPlayers={handleNewPlayers} />} path="/truth-or-dare" />
                    <Route element={<TruthOrDareGame players={players} />} path="/truth-or-dare/play" />
                    <Route element={<WhatYouRatterHome />} path="/wyr" />
                    <Route element={<WhatYouRatterGame />} path="/wyr/play" />
                    <Route element={<NeverHaveIEverHome players={players} setPlayers={handleNewPlayers} />} path="/nhie" />
                    <Route element={<NeverHaveIEverGame players={players} />} path="/nhie/play" />
                    <Route element={<WhosMostLikelyHome players={players} setPlayers={handleNewPlayers} />} path="/wmlt" />
                    <Route element={<WhosMostLikelyGame players={players} />} path="/wmlt/play" />

                </Route>
            </Routes>
        </Router >
    );
};

export default AppRouter;