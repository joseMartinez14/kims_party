import { Box, Typography, Button, Paper } from '@mui/material';
import { COLORS } from '../../utils/Colors';
import { TEXTS } from '../../utils/Texts';
import SportsBarIcon from '@mui/icons-material/SportsBar';
import { useState } from 'react';
import { datalist } from '../../utils/Data';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import DisplayQuestion from './DisplayQuestion';

import { useNavigate } from 'react-router-dom';
import EndGame from './EndGame';


interface GameItem {
    condition: string;
    action: string;
    type: string;
    answer: string;
}


const Game = () => {
    const [data, setData] = useState<GameItem[]>(datalist);

    const getRandomItem = () => {
        const randomIndex = Math.floor(Math.random() * data.length);
        return data[randomIndex];
    }

    const getRandomItemDelete = () => {
        const data_temp = [...data];
        const randomIndex = Math.floor(Math.random() * data_temp.length);
        var temp_ob = data_temp[randomIndex];
        data_temp.splice(randomIndex,1);
        setData(data_temp);
        return temp_ob;
    }

    
    const [item, setItem] = useState<GameItem>(getRandomItem);
    const [showAnswer, setShowAnswer] = useState<boolean>(false);
    const [answerError, setAnswerError] = useState<boolean>(false);
    const navigate = useNavigate();
    


    const handleShowAnswer = () => {
        setShowAnswer(true)
    }

    const handleNext = () => {
        if(item.type == 'Question' && showAnswer == false){
            setAnswerError(true);
        } else {
            setItem(getRandomItemDelete());
            setShowAnswer(false);
            setAnswerError(false);
        }
    }

    const handleExit = () => {
        navigate('/')
    }

    return (
        <Box display="flex"
            alignItems={'center'} justifyContent={'center'}
        >{ (data.length > 0)? (
            <Box px={4} >
                <Paper
                elevation={20}
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    p: 1,
                    mt:5,
                    borderRadius:3,
                    textAlign: 'center',
                }}>
                    <Typography gutterBottom sx={{
                        color: COLORS.pruebas,
                        fontSize: '26px',
                        fontWeight: '600',
                        pt: 1,
                        textAlign: 'center',
                    }}>
                        {item.condition} 
                    </Typography>
                </Paper>
                <Typography gutterBottom sx={{
                    color: COLORS.neutral500,
                    fontSize: '26px',
                    fontWeight: '600',
                    textAlign: 'center',
                    pt: 4,
                }}>{item.action}</Typography>

                {
                    (item.type == 'Question') && <DisplayQuestion answer={item.answer} showError={answerError} showAnswer={showAnswer} handleShowAnswer={handleShowAnswer} />
                }

                <Box display="flex"
                    alignItems={'center'} justifyContent={'space-evenly'} pt={9}
                >
                    <Button variant="contained" onClick={handleNext}> Siguiente<SkipNextIcon /></Button>
                    <Button variant="contained" onClick={handleExit} sx={{ backgroundColor: COLORS.warningMain }}> Salir    <ExitToAppIcon /></Button>
                </Box>
            </Box>
        ) : 
        (
            <EndGame />
        )}
        </Box >
    )
}

export default Game;