import { Box, Typography, Button } from '@mui/material';
import { COLORS } from '../../utils/Colors';
import { TEXTS } from '../../utils/Texts';
import SportsBarIcon from '@mui/icons-material/SportsBar';
import { useState } from 'react';
import { getRandomItem } from '../../utils/Data';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import DisplayQuestion from './DisplayQuestion';

import { useNavigate } from 'react-router-dom';


interface GameItem {
    condition: string;
    action: string;
    type: string;
    answer: string;
}


const Game = () => {

    const [item, setItem] = useState<GameItem>(getRandomItem());
    const [showAnswer, setAhowAnswer] = useState<boolean>(false);
    const navigate = useNavigate();

    const handleShowAnswer = () => {
        setAhowAnswer(true)
    }

    const handleNext = () => {
        setItem(getRandomItem())
        setAhowAnswer(false)
    }

    const handleExit = () => {
        navigate('/')
    }

    return (
        <Box display="flex"
            alignItems={'center'} justifyContent={'center'}
        >
            <Box px={4} >
                <Typography gutterBottom sx={{
                    color: COLORS.pruebas,
                    fontSize: '26px',
                    fontWeight: '600',
                    pt: 6,
                    textAlign: 'center',
                }}> {item.condition} </Typography>
                <Typography gutterBottom sx={{
                    color: COLORS.neutral500,
                    fontSize: '18px',
                    fontWeight: '600',
                    textAlign: 'center',
                    pt: 4,
                }}>{item.action}</Typography>

                {
                    (item.type == 'Question') && <DisplayQuestion answer={item.answer} showAnswer={showAnswer} handleShowAnswer={handleShowAnswer} />
                }

                <Box display="flex"
                    alignItems={'center'} justifyContent={'space-evenly'} pt={9}
                >
                    <Button variant="contained" onClick={handleNext}> Siguiente<SkipNextIcon /></Button>
                    <Button variant="contained" onClick={handleExit} sx={{ backgroundColor: COLORS.warningMain }}> Salir    <ExitToAppIcon /></Button>
                </Box>
            </Box>
        </Box >
    )
}

export default Game;