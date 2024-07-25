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

interface TruthOrDareGameProps {
    players: string[];
}

/*
1) Primero un bool que dice si los botones estan activados o no
2) Cuando se activa alguno de ellos entonces tengo que esconder los botones, poner el loading y mandar el request
3) Cuando es un turno diferente. Poner en null la pregunta y poner en true los botones

*/



const TruthOrDareGame = (props: TruthOrDareGameProps) => {

    const { players } = props;
    const [playerIndex, setPlayerIndex] = useState<number>(0);
    const [isBottonAvail, setisBottonAvail] = useState<boolean>(true);
    const [isLoading, setisLoading] = useState<boolean>(false);
    const [gameText, setgameText] = useState<string | null>(null);

    const changePLayer = async () => {
        await setPlayerIndex((playerIndex + 1))
        if ((playerIndex + 1) >= players.length) {
            setPlayerIndex(0)
        }

        setgameText(null);
        setisBottonAvail(true);
    }

    const storage_key = "QUE_PARIO_MAMA_JUGADORES"

    const fetchDares = async (url: string): Promise<string> => {

        //Deberia recibir el url para mandar la vara

        try {
            //const result = await axios.get("https://api.truthordarebot.xyz/api/dare?rating=r");
            const result = await axios.get(url);

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
            swal({
                icon: "error",
                title: "Oops...",
                text: "Error in game data provider",
            });
        }
        return "";
    }

    const play = async (url: string) => {

        if (!isBottonAvail) {
            return;
        }
        setisBottonAvail(false);
        setisLoading(true);

        const text = await fetchDares(url);

        setisLoading(false);
        setgameText(text);


    }

    useEffect(() => {
        console.log("en use effect");
    }, []);

    return (
        <Box height={'90vh'}
        >
            <Box height={'15%'} display="flex" alignItems={'center'} justifyContent={'center'}>
                <Typography gutterBottom sx={{
                    color: COLORS.allTexts,
                    fontSize: '30px',
                    fontWeight: '350',
                    textAlign: 'center'
                }}>{players[playerIndex]}
                </Typography>
            </Box>


            {isBottonAvail && (
                <Box display={'flex'} flexDirection={'row'}>
                    <Card sx={{ width: '100%', borderRadius: 8, backgroundColor: COLORS.black, mx: 5, pt: 1, border: '2px solid white', }} raised>
                        <div onClick={() => { play("https://api.truthordarebot.xyz/api/truth?rating=r") }} >
                            <Typography gutterBottom sx={{
                                color: COLORS.allTexts,
                                fontSize: '28px',
                                fontWeight: '500',
                                textAlign: 'center'
                            }}>{'Truth'}
                            </Typography>
                        </div>
                    </Card>
                    <Card sx={{ width: '100%', borderRadius: 8, backgroundColor: COLORS.black, mx: 5, pt: 1, border: '2px solid white' }} raised>
                        <div onClick={() => { play("https://api.truthordarebot.xyz/api/dare?rating=r") }}>
                            <Typography gutterBottom sx={{
                                color: COLORS.allTexts,
                                fontSize: '28px',
                                fontWeight: '500',
                                textAlign: 'center'
                            }}>{'Dare'}
                            </Typography>
                        </div>
                    </Card>
                </Box>
            )}

            <Box height={'40%'} display="flex" alignItems={'center'} justifyContent={'center'} sx={{ overflowY: 'auto' }}>
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
                            color: COLORS.allTexts,
                            fontSize: '32px',
                            fontWeight: '450',
                            pt: 0,
                            textAlign: 'center',
                        }}>
                            {gameText}
                        </Typography>
                    </Box>
                )}
            </Box>

            <Box height={'20%'} display="flex" alignItems={'center'} justifyContent={'center'}>
                {gameText && (
                    <Box px={2} pt={3}>
                        <Typography gutterBottom sx={{
                            color: COLORS.almostWhite,
                            fontSize: '22px',
                            fontWeight: '400',
                            textAlign: 'center',
                            pt: 4,
                        }}>{`If you answer or complete the dare, everyone drinks 4 sips if not you drink.`}</Typography>

                    </Box>
                )}
            </Box>

            {!isBottonAvail && (
                <Box height={'20%'} display="flex" alignItems={'center'} justifyContent={'center'}>
                    <Box pt={2} >
                        <Button variant="contained" sx={{ color: '#000000', backgroundColor: '#FFFFFF', height: '45px', width: '180px' }} onClick={changePLayer}>Next player<SkipNextIcon /></Button>
                    </Box>
                </Box>
            )}

        </Box >
    )
}

export default TruthOrDareGame;