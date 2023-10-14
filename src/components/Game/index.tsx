import { Box, Typography, Button, Paper } from '@mui/material';
import { COLORS } from '../../utils/Colors';
import { TEXTS } from '../../utils/Texts';
import SportsBarIcon from '@mui/icons-material/SportsBar';
import { useState } from 'react';
import { datalist, photolist } from '../../utils/Data';
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
    const [photos, setPhotos] = useState<string[]>(photolist);

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

    const getRandomPhotoDelete = () => {
        console.log(photos)
        const data_temp = [...photos];
        const randomIndex = Math.floor(Math.random() * data_temp.length);
        var temp_ob = data_temp[randomIndex];
        data_temp.splice(randomIndex,1);
        setPhotos(data_temp);
        return temp_ob;
    }

    
    const [item, setItem] = useState<GameItem>(getRandomItem);
    const [photoItem, setPhotoItem] = useState<string>(getRandomPhotoDelete);
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
            setPhotoItem(getRandomPhotoDelete());
            setShowAnswer(false);
            setAnswerError(false);
            if(photos.length <= 1){
                setPhotos(photolist)
            }
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
                <Typography gutterBottom sx={{
                    color: COLORS.pruebas,
                    fontSize: '26px',
                    fontWeight: '600',
                    pt: 7,
                    textAlign: 'center',
                }}>
                    {item.condition} 
                </Typography>
                <Typography gutterBottom sx={{
                    color: COLORS.neutral500,
                    fontSize: '22px',
                    fontWeight: '600',
                    textAlign: 'center',
                    pt: 4,
                }}>{item.action}</Typography>

                {
                    (item.type == 'Question') && <DisplayQuestion answer={item.answer} showError={answerError} showAnswer={showAnswer} handleShowAnswer={handleShowAnswer} />
                }

                <Box display="flex"
                    alignItems={'center'} justifyContent={'space-evenly'} pt={7}
                >
                    <Button variant="contained" onClick={handleNext}>Siguiente turno<SkipNextIcon /></Button>
                    <Button variant="contained" onClick={handleExit} sx={{ backgroundColor: COLORS.warningMain }}> Salir <ExitToAppIcon /></Button>
                </Box>

                <Box display="flex"
                    alignItems={'center'} justifyContent={'space-evenly'} pt={2}
                >
                    <img src={photoItem} style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                }} />
                </Box>
                <Typography gutterBottom sx={{
                    color: COLORS.black,
                    fontSize: '12px',
                    fontWeight: '400',
                    textAlign: 'center',
                    pt: 2,
                    pb:7
                }}>
                    *Imagenes ilustrativas. No tienen nada que ver con el juego
                </Typography>
                
            </Box>
        ) : 
        (
            <EndGame />
        )}
        </Box >
    )
}

export default Game;