import { Box, Typography, Button } from '@mui/material';
import { COLORS } from '../../utils/Colors';
import { TEXTS } from '../../utils/Texts';
import SportsBarIcon from '@mui/icons-material/SportsBar';
const HomeComponent = () => {
    return (
        <Box display="flex"
            alignItems={'center'} justifyContent={'center'}
        >
            <Box px={4} >
                <Typography gutterBottom sx={{
                    color: COLORS.homeSubtitle,
                    fontSize: '20px',
                    fontWeight: '600',
                    pt: 3,
                    textAlign: 'center'
                }}>{TEXTS.game_name}</Typography>
                <Box display="flex"
                    alignItems={'center'} justifyContent={'center'} py={3}
                >
                    <Button variant="contained"> Empezar    <SportsBarIcon /></Button>
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
            </Box>
        </Box >
    )
}

export default HomeComponent;