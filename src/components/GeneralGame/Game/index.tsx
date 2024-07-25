import { Box, Typography, Button, Paper } from '@mui/material';
import { COLORS } from '../../../utils/Colors';
import { TEXTS } from '../../../utils/Texts';
import SportsBarIcon from '@mui/icons-material/SportsBar';
import { useState } from 'react';
import { datalist } from '../../../utils/DataGeneral';
import { questions } from '../../../utils/DataGeneral';
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

interface GeneralGameProps {
    players: string[];
    pool: number;
}


const GeneralGameGame = (props: GeneralGameProps) => {
    const { players, pool } = props;
    const [playerIndex, setPlayerIndex] = useState<number>(0);
    const [data, setData] = useState<GameItem[]>(questions[pool]);

    const Swal = require('sweetalert2')

    const getRandomItem = () => {
        const randomIndex = Math.floor(Math.random() * data.length);
        return data[randomIndex];
    }

    const changePLayer = () => {
        setPlayerIndex((playerIndex + 1))
        if ((playerIndex + 1) >= players.length) {
            setPlayerIndex(0)
        }
    }


    const getRandomItemDelete = () => {
        const data_temp = [...data];
        const randomIndex = Math.floor(Math.random() * data_temp.length);
        var temp_ob = data_temp[randomIndex];
        data_temp.splice(randomIndex, 1);
        setData(data_temp);
        return temp_ob;
    }

    const [item, setItem] = useState<GameItem>(getRandomItem);
    const [showAnswer, setShowAnswer] = useState<boolean>(false);
    const navigate = useNavigate();



    const handleShowAnswer = () => {
        Swal.fire({
            text: item.answer,
            icon: "info"
        });
        setShowAnswer(true)
    }

    const handleNext = () => {
        if (item.type.match(/Question.*/) && showAnswer == false) {
            Swal.fire({
                text: "Vea primero la respuesta",
                icon: "error"
            });
        } else {
            setItem(getRandomItemDelete());
            setShowAnswer(false);
            changePLayer();
        }
    }

    return (
        <Box
            height={'90vh'}
        >
            {(data.length > 0) ? (
                <Box px={4} height={'100%'}>
                    <Box height={'15%'} display="flex" alignItems={'center'} justifyContent={'center'}>
                        {players !== undefined &&
                            <Typography gutterBottom sx={{
                                color: COLORS.allTexts,
                                fontSize: '30px',
                                fontWeight: '350',
                                textAlign: 'center'
                            }}>{players[playerIndex]}
                            </Typography>
                        }
                    </Box>
                    <Box height={'40%'} display="flex" alignItems={'center'} justifyContent={'center'} sx={{ overflowY: 'auto' }}>
                        <Typography gutterBottom sx={{
                            color: COLORS.allTexts,
                            fontSize: '32px',
                            fontWeight: '450',
                            pt: 0,
                            textAlign: 'center',
                        }}>
                            {item.condition}
                        </Typography>
                    </Box>
                    <Box height={'15%'} display="flex" alignItems={'center'} justifyContent={'center'} flexDirection={'column'}>
                        <Typography gutterBottom sx={{
                            color: COLORS.neutral500,
                            fontSize: '22px',
                            fontWeight: '600',
                            textAlign: 'center',
                            pt: 4,
                        }}>{item.action}</Typography>

                    </Box>
                    <Box height={'10%'} display="flex" alignItems={'center'} justifyContent={'center'} flexDirection={'column'}>

                        {
                            (item.type.match(/Question.*/)) &&
                            <Button variant="contained" sx={{ color: '#000000', backgroundColor: '#FFFFFF', height: '45px', width: '200px' }} onClick={handleShowAnswer}>Respuesta<SkipNextIcon /></Button>
                        }
                    </Box>

                    <Box height={'20%'} display="flex" alignItems={'center'} justifyContent={'center'}>
                        <Button variant="contained" sx={{ color: '#000000', backgroundColor: '#FFFFFF', height: '45px', width: '200px' }} onClick={handleNext}>Siguiente turno<SkipNextIcon /></Button>
                    </Box>

                </Box>
            ) :
                (
                    <EndGame />
                )}
        </Box >
    )
}

export default GeneralGameGame;