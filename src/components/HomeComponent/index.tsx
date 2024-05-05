import { Box, Typography, Button, Paper } from '@mui/material';
import { COLORS } from '../../utils/Colors';
import { TEXTS } from '../../utils/Texts';
import SportsBarIcon from '@mui/icons-material/SportsBar';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';

import { useNavigate } from 'react-router-dom';

const HomeComponent = () => {
    const navigate = useNavigate();

    const handleStart = () => {
        navigate('/kims_party/play')
    }

    const handlePhotos = () => {
        navigate('/kims_party/photos')
    }

    return (
        <Box display="flex"
            alignItems={'center'} justifyContent={'center'}
        >
            <Box px={4} >
                <Typography gutterBottom sx={{
                    color: COLORS.homeSubtitle,
                    fontSize: '35px',
                    fontWeight: '600',
                    pt: 6,
                    textAlign: 'center'
                }}>{TEXTS.game_name}</Typography>
                <Box display="flex"
                    alignItems={'center'} justifyContent={'center'} py={5}
                >
                    <Button variant="contained" onClick={handleStart}>Empezar<SportsBarIcon /></Button>
                </Box>
                <Typography gutterBottom sx={{
                    color: COLORS.neutral500,
                    fontSize: '15px',
                    fontWeight: '600',
                    pt: 3,
                }}> {TEXTS.game_description} </Typography>
                <Typography gutterBottom sx={{
                    color: COLORS.black,
                    fontSize: '15px',
                    fontWeight: '600',
                    pt: 3,
                }}>{TEXTS.game_disclosure}</Typography>
                <Button sx={{ mt: 3 }} variant="contained" onClick={handlePhotos}>Solo ver fotos<PhotoCameraIcon /></Button>
            </Box>
        </Box >
    )
}

export default HomeComponent;