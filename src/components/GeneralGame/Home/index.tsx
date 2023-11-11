import { Box, Typography, Button, Paper } from '@mui/material';
import { COLORS } from '../../../utils/Colors';
import { TEXTS } from '../../../utils/Texts';
import SportsBarIcon from '@mui/icons-material/SportsBar';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';

import { useNavigate } from 'react-router-dom';
import Players from '../Players';
import { useState, useEffect, useMemo } from 'react';

interface PlayersProps {
    players: string[];
    setPlayers: (newPlayers: string[]) => void;
}
const storage_key = "QUE_PARIO_MAMA_JUGADORES"
const GeneralGameHome = (props: PlayersProps) => {

    const { players, setPlayers } = props;

    const navigate = useNavigate();
    const handleStart = () => {
        navigate('/play')
    }


    // Effect to save data to localStorage whenever the array changes
    useEffect(() => {
        // Convert the array to a JSON string and store it in localStorage
        localStorage.setItem(storage_key, JSON.stringify(players));
    }, [players]);

    return (
        <Box display="flex"
            alignItems={'center'} justifyContent={'center'}
        >
            <Box px={4} >
                <Typography gutterBottom sx={{
                    color: COLORS.homeSubtitle,
                    fontSize: '30px',
                    fontWeight: '600',
                    pt: 3,
                    textAlign: 'center'
                }}>{TEXTS.game_name}</Typography>
                <Typography gutterBottom sx={{
                    color: COLORS.neutral500,
                    fontSize: '13px',
                    fontWeight: '600',
                    pt: 2,
                }}> {TEXTS.general_game_description} </Typography>

                <Box display="flex"
                    alignItems={'center'} justifyContent={'center'} py={3}
                >
                    <Button variant="contained" onClick={handleStart}>Empezar<SportsBarIcon /></Button>
                </Box>
                <Typography gutterBottom sx={{
                    color: COLORS.black,
                    fontSize: '11px',
                    fontWeight: '600',
                    pt: 2,
                }}>{TEXTS.game_disclosure}</Typography>
                <Players players={players} setPlayers={setPlayers} />
            </Box>

        </Box >
    )
}

export default GeneralGameHome;