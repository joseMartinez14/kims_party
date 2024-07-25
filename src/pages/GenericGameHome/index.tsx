import { Box, Typography, Button, Paper, Select, SelectChangeEvent, MenuItem } from '@mui/material';
import { COLORS } from '../../utils/Colors';
import { TEXTS } from '../../utils/Texts';
import SportsBarIcon from '@mui/icons-material/SportsBar';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';

import { useNavigate } from 'react-router-dom';
import GameCard from '../../components/MultipleGames/GameCard';
import { useEffect, useState } from 'react';
import Players from '../../components/GeneralGame/Players';
import { titles } from '../../utils/DataGeneral';

interface TruthOrDareProps {
    players: string[];
    playPath: string;
    title: string;
    description: string;
    poolSelected?: number;
    setPoolSelected?: (newPool: number) => void;
    setPlayers: (newPlayers: string[]) => void;
}

const storage_key = "QUE_PARIO_MAMA_JUGADORES"

const GenericGameHome = (props: TruthOrDareProps) => {
    const navigate = useNavigate();

    const { players, setPlayers, playPath, title, description, setPoolSelected, poolSelected } = props;
    const [questionsTypes, setQuestionsTypes] = useState<number>(titles.length);


    // Effect to save data to localStorage whenever the array changes
    useEffect(() => {
        // Convert the array to a JSON string and store it in localStorage
        localStorage.setItem(storage_key, JSON.stringify(players));
    }, [players]);

    const handleStart = () => {
        navigate(playPath);
    }

    const handlePoolChange = (event: SelectChangeEvent) => {
        console.log(poolSelected)
        if (setPoolSelected) {
            setPoolSelected(parseInt(event.target.value));
        }
    }

    const getPools = () => {
        const content = [];
        for (let i = 0; i < questionsTypes; i++) {
            content.push(<MenuItem value={i}> {titles[i]}</MenuItem>);
        }
        return content;
    }


    return (
        <Box flexDirection={'column'} height={'90dvh'}
        >
            <Box height={'15%'} display="flex" alignItems={'center'} justifyContent={'center'}>
                <Typography gutterBottom sx={{
                    color: COLORS.allTexts,
                    fontSize: '35px',
                    fontWeight: '600',
                    pt: 0,
                    textAlign: 'center'
                }}>{title}
                </Typography>
            </Box>

            <Box height={'30%'} display="flex" alignItems={'center'} justifyContent={'center'} flexDirection={'column'} sx={{ overflowY: "auto" }}>
                <Typography gutterBottom sx={{
                    color: COLORS.allTexts,
                    fontSize: '18px',
                    fontWeight: '400',
                    textAlign: 'center',
                    px: 1.2
                }}> {description}</Typography>

                {poolSelected != undefined &&
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={String(poolSelected)}
                        label="Age"
                        onChange={handlePoolChange}
                        sx={{
                            fontSize: '13px',
                            color: COLORS.allTexts,
                            pt: 2,
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': {
                                    borderColor: 'white',
                                },
                                '&:hover fieldset': {
                                    borderColor: 'white',
                                },
                                '&.Mui-focused fieldset': {
                                    borderColor: 'white',
                                },
                            },
                        }}
                    >
                        {getPools()}
                    </Select>
                }

            </Box>
            <Box height={'40%'} px={2}>
                <Players players={players} setPlayers={setPlayers} />
            </Box>
            <Box width={'100%'} height={'15%'}>
                <Box display="flex"
                    alignItems={'center'} justifyContent={'center'} py={4}
                >
                    <Button variant="contained" sx={{ color: '#000000', backgroundColor: '#FFFFFF', height: '45px', width: '120px' }} onClick={handleStart}>Start<SportsBarIcon /></Button>
                </Box>
            </Box>

        </Box >
    )
}

export default GenericGameHome;