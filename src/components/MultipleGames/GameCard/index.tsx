import { Box, Typography, Button, Paper, Card } from '@mui/material';
import SportsBarIcon from '@mui/icons-material/SportsBar';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';

import { useNavigate } from 'react-router-dom';
import { COLORS } from '../../../utils/Colors';


interface GameCardProps {
    gameName: string;
}

const GameCard = (props: GameCardProps) => {

    const { gameName } = props;

    return (
        <Card sx={{ width: '100%', borderRadius: 8, backgroundColor: "#F1F9FF", py: 1 }} raised>
            <Typography gutterBottom sx={{
                color: '#B52606',
                fontSize: '28px',
                fontWeight: '500',
                textAlign: 'center'
            }}>{gameName}
            </Typography>
        </Card>
    )
}

export default GameCard;