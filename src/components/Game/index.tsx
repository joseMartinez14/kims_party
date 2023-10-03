import { Box, Typography, Button } from '@mui/material';
import { COLORS } from '../../utils/Colors';
import { TEXTS } from '../../utils/Texts';
import SportsBarIcon from '@mui/icons-material/SportsBar';
import { useState } from 'react';
import { getRandomItem } from '../../utils/Data';


interface GameItem {
    condition: string;
    action: string;
    type: string;
    answer?: string;
}


const Game = () => {

    const [item, setItem] = useState<GameItem>(getRandomItem())

    return (
        <Box display="flex"
            alignItems={'center'} justifyContent={'center'}
        >
            <Box px={4} >
                <Typography gutterBottom sx={{
                    color: COLORS.pruebas,
                    fontSize: '20px',
                    fontWeight: '600',
                    pt: 3,
                    textAlign: 'center',
                }}> {item.condition} </Typography>
                <Typography gutterBottom sx={{
                    color: COLORS.neutral500,
                    fontSize: '15px',
                    fontWeight: '600',
                    textAlign: 'center',
                    pt: 3,
                }}>{item.action}</Typography>
            </Box>
        </Box >
    )
}

export default Game;