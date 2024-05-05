import { Box, Typography, Button, Paper, MenuItem, Card } from '@mui/material';
import { COLORS } from '../../../utils/Colors';
import { titles } from '../../../utils/DataGeneral';
import { TEXTS } from '../../../utils/Texts';
import SportsBarIcon from '@mui/icons-material/SportsBar';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import axios from 'axios';
import swal from 'sweetalert';


import { useNavigate } from 'react-router-dom';
import { useState, useEffect, useMemo } from 'react';
import Players from '../../GeneralGame/Players';
import { Hourglass } from 'react-loader-spinner';

/*
1) 
2) Cuando se activa alguno de ellos entonces tengo que esconder los botones, poner el loading y mandar el request
3) Cuando es un turno diferente. Poner en null la pregunta y poner en true los botones

*/



const WhatYouRatterGame = () => {

    const [playerIndex, setPlayerIndex] = useState<number>(0);
    const [isLoading, setisLoading] = useState<boolean>(false);
    const [gameText, setgameText] = useState<string | null>(null);

    const changeRound = async () => {
        setgameText(null);
        play("https://api.truthordarebot.xyz/api/wyr?rating=r");
    }

    const fetchDares = async (url: string): Promise<string> => {

        //Deberia recibir el url para mandar la vara

        try {
            //const result = await axios.get("https://api.truthordarebot.xyz/api/dare?rating=r");
            const result = await axios.get(url);
            console.log("Terminoo");
            console.log(result)

            if (result.data.question) {
                console.log("**** ", result.data.question);
                return result.data.question;
            } else {
                swal({
                    icon: "error",
                    title: "Oops...",
                    text: "Error in game data provider",
                });
                return "";
            }

        }
        catch (error: any) {
            console.log("Error en api")
            console.log(error);
            swal({
                icon: "error",
                title: "Oops...",
                text: "Error in game data provider",
            });
        }
        return "";
    }

    const play = async (url: string) => {

        setisLoading(true);

        const text = await fetchDares(url);

        setisLoading(false);
        setgameText(text);

    }

    useEffect(() => {
        console.log("en use effect");
        play("https://api.truthordarebot.xyz/api/wyr?rating=r")
    }, []);

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
                }}>{"Everyone"}
                </Typography>
            </Box>

            {isLoading && (
                <Hourglass
                    visible={isLoading}
                    height="50"
                    width="50"
                    ariaLabel="hourglass-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    colors={['#306cce', '#72a1ed']}
                />
            )}
            {gameText && (
                <Box px={2} pt={3}>
                    <Typography gutterBottom sx={{
                        color: COLORS.pruebas,
                        fontSize: '26px',
                        fontWeight: '600',
                        pt: 0,
                        textAlign: 'center',
                    }}>
                        {gameText}
                    </Typography>
                    <Typography gutterBottom sx={{
                        color: COLORS.neutral500,
                        fontSize: '22px',
                        fontWeight: '600',
                        textAlign: 'center',
                        pt: 4,
                    }}>{"Everyone choose. The biggest group has to drink 4 sips each. If everyone chooses the same one then all have to drink 1 shot."}</Typography>
                </Box>
            )}

            {gameText && (
                <Box pt={3} >
                    <Button variant="contained" onClick={changeRound}>Next round<SkipNextIcon /></Button>
                </Box>
            )}

        </Box >
    )
}

export default WhatYouRatterGame;