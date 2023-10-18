import { Box, Typography, Button, Paper } from '@mui/material';
import { COLORS } from '../../utils/Colors';
import { TEXTS } from '../../utils/Texts';
import SportsBarIcon from '@mui/icons-material/SportsBar';
import { useState } from 'react';
import { datalist, photolist } from '../../utils/Data';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import SkipNextIcon from '@mui/icons-material/SkipNext';


import { useNavigate } from 'react-router-dom';


const OnlyPhotos = () => {
    const [photos, setPhotos] = useState<string[]>(photolist);

    const getRandomPhotoDelete = () => {
        console.log(photos)
        const data_temp = [...photos];
        const randomIndex = Math.floor(Math.random() * data_temp.length);
        var temp_ob = data_temp[randomIndex];
        data_temp.splice(randomIndex, 1);
        setPhotos(data_temp);
        return temp_ob;
    }


    const [photoItem, setPhotoItem] = useState<string>(getRandomPhotoDelete);
    const navigate = useNavigate();

    const handleNext = () => {
        setPhotoItem(getRandomPhotoDelete());
        if (photos.length <= 1) {
            setPhotos(photolist)
        }
    }

    const handleExit = () => {
        navigate('/')
    }

    return (
        <Box display="flex"
            alignItems={'center'} justifyContent={'center'} flexDirection={'column'}
        >
            <Box display="flex"
                alignItems={'center'} justifyContent={'space-evenly'} pt={3}
            >
                <img src={photoItem} style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                }} />
            </Box>
            <Box display="flex"
                alignItems={'center'} justifyContent={'space-evenly'} pt={2} width={'100%'}
            >
                <Button variant="contained" onClick={handleNext}>Siguiente foto<SkipNextIcon /></Button>
                <Button variant="contained" onClick={handleExit} sx={{ backgroundColor: COLORS.warningMain }}> Salir <ExitToAppIcon /></Button>
            </Box>

        </Box>
    )
}

export default OnlyPhotos;