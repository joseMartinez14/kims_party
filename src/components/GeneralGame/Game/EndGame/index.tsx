import { Box, Typography, Button } from '@mui/material';
import { COLORS } from '../../../../utils/Colors';

const EndGame = () => {
    return (<>
        <Typography gutterBottom sx={{
            color: COLORS.error,
            fontSize: '28px',
            fontWeight: '600',
            pt: 6,
            textAlign: 'center',
        }}> Se acabo el juego. Si llegaron hasta aqui y no estan ebrios. No jugaron bien. </Typography>
    </>)
}

export default EndGame;