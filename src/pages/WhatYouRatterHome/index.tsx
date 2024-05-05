import { Box, Typography, Button, Paper } from '@mui/material';
import { COLORS } from '../../utils/Colors';
import { TEXTS } from '../../utils/Texts';
import SportsBarIcon from '@mui/icons-material/SportsBar';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';

import { useNavigate } from 'react-router-dom';
import GameCard from '../../components/MultipleGames/GameCard';
import { useEffect } from 'react';
import Players from '../../components/GeneralGame/Players';


const WhatYouRatterHome = () => {
    const navigate = useNavigate();


    const handleStart = () => {
        console.log("Vamos a empezar perras!!");
        navigate('/wyr/play');
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
                }}>{"What would you rather"}
                </Typography>
            </Box>

            <Box width={'100%'} pt={3} px={1}>

                <Typography gutterBottom sx={{
                    color: COLORS.neutral500,
                    fontSize: '18px',
                    fontWeight: '600',
                    pt: 2,
                }}> {"Description: This is group game. Each round there is a questios of what whould you rather and two options. Everyone on the group has to choose one of them, the group with the most voters has to drink and if everyone chooses the same option then everyone drinks."}</Typography>

                <Box display="flex"
                    alignItems={'center'} justifyContent={'center'} py={4}
                >
                    <Button variant="contained" onClick={handleStart}>Start<SportsBarIcon /></Button>
                </Box>
            </Box>

        </Box >
    )
}

export default WhatYouRatterHome;