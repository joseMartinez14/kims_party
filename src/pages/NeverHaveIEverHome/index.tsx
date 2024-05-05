import { Box, Typography, Button, Paper } from '@mui/material';
import { COLORS } from '../../utils/Colors';
import { TEXTS } from '../../utils/Texts';
import SportsBarIcon from '@mui/icons-material/SportsBar';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';

import { useNavigate } from 'react-router-dom';
import GameCard from '../../components/MultipleGames/GameCard';
import { useEffect } from 'react';
import Players from '../../components/GeneralGame/Players';

interface TruthOrDareProps {
    players: string[];
    setPlayers: (newPlayers: string[]) => void;
}

const storage_key = "QUE_PARIO_MAMA_JUGADORES"

const NeverHaveIEverHome = (props: TruthOrDareProps) => {
    const navigate = useNavigate();

    const { players, setPlayers } = props;

    // Effect to save data to localStorage whenever the array changes
    useEffect(() => {
        // Convert the array to a JSON string and store it in localStorage
        localStorage.setItem(storage_key, JSON.stringify(players));
    }, [players]);

    const handleStart = () => {
        console.log("Vamos a empezar perras!!");
        navigate('/nhie/play');
    }


    return (
        <Box display="flex"
            alignItems={'center'} justifyContent={'center'} flexDirection={'column'}
        >
            <Box px={4} >
                <Typography gutterBottom sx={{
                    color: COLORS.homeSubtitle,
                    fontSize: '35px',
                    fontWeight: '600',
                    pt: 6,
                    textAlign: 'center'
                }}>{"Never have I ever"}
                </Typography>
            </Box>

            <Box width={'100%'} pt={3} px={1}>

                <Typography gutterBottom sx={{
                    color: COLORS.neutral500,
                    fontSize: '18px',
                    fontWeight: '600',
                    pt: 2,
                }}> {"Description: This is the normal Never Have I Ever Game, the player in turn has to answer if he/she has done it, you choose someone to drink otherwise you have to drink."}</Typography>

                <Box width={'100%'} pt={1}
                >
                    <Players players={players} setPlayers={setPlayers} />
                </Box>
                <Box display="flex"
                    alignItems={'center'} justifyContent={'center'} py={4}
                >
                    <Button variant="contained" onClick={handleStart}>Start<SportsBarIcon /></Button>
                </Box>
            </Box>

        </Box >
    )
}

export default NeverHaveIEverHome;