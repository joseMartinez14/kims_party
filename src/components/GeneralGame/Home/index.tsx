import { Box, Typography, Button, Paper, MenuItem } from '@mui/material';
import { COLORS } from '../../../utils/Colors';
import { titles } from '../../../utils/DataGeneral';
import { TEXTS } from '../../../utils/Texts';
import SportsBarIcon from '@mui/icons-material/SportsBar';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import Select, { SelectChangeEvent } from '@mui/material/Select';


import { useNavigate } from 'react-router-dom';
import Players from '../Players';
import { useState, useEffect, useMemo } from 'react';

interface PlayersProps {
    players: string[];
    setPlayers: (newPlayers: string[]) => void;
    poolSelected: number;
    setPoolSelected: (newPool: number) => void;
}
const storage_key = "QUE_PARIO_MAMA_JUGADORES"
const GeneralGameHome = (props: PlayersProps) => {

    const { players, setPlayers, poolSelected, setPoolSelected } = props;
    const [questionsTypes, setQuestionsTypes] = useState<number>(titles.length);

    const navigate = useNavigate();
    const handleStart = () => {
        navigate('/play')
    }

    const getPools = () => {
        const content = [];
        for (let i = 0; i < questionsTypes; i++) {
            content.push(<MenuItem value={i}> {titles[i]}</MenuItem>);
        }
        return content;
    }

    const handlePoolChange = (event: SelectChangeEvent) => {
        console.log(poolSelected)
        setPoolSelected(parseInt(event.target.value));
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

                <Typography gutterBottom sx={{
                    color: COLORS.black2,
                    fontSize: '13px',
                    fontWeight: '600',
                    pt: 2,
                }}> {TEXTS.question_pool_disclamer} </Typography>

                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={String(poolSelected)}
                    label="Age"
                    onChange={handlePoolChange}
                    sx={{
                        fontSize: '13px'
                    }}
                >
                    {getPools()}
                </Select>

                <Box width={'100%'} pt={1}
                >
                    <Players players={players} setPlayers={setPlayers} />
                </Box>
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

            </Box>

        </Box >
    )
}

export default GeneralGameHome;