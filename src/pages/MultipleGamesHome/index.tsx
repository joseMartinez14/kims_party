import { Box, Typography, Button, Paper } from '@mui/material';
import { COLORS } from '../../utils/Colors';
import { TEXTS } from '../../utils/Texts';
import SportsBarIcon from '@mui/icons-material/SportsBar';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';

import { useNavigate } from 'react-router-dom';
import GameCard from '../../components/MultipleGames/GameCard';

const MulipleGamesHome = () => {
    const navigate = useNavigate();

    return (
        <Box display="flex"
            alignItems={'center'} justifyContent={'center'} flexDirection={'column'}
        >
            <Box px={4} >
                <Typography gutterBottom sx={{
                    color: "#FFFFFF",
                    fontSize: '35px',
                    fontWeight: '600',
                    pt: 6,
                    textAlign: 'center'
                }}>{"Choose your drinking game"}
                </Typography>
            </Box>

            <Box width={'100%'} pt={3} px={3}>
                <div onClick={() => {
                    navigate('/que_pario_mama_game')
                }}>
                    <GameCard gameName='QPM Trivia/Dares (es)' />
                </div>
                <div style={{ paddingTop: 15 }} onClick={() => {
                    navigate('/truth-or-dare')
                }}>
                    <GameCard gameName='Truth or dare' />
                </div>
                <div style={{ paddingTop: 15 }} onClick={() => {
                    navigate('/wyr')
                }}>
                    <GameCard gameName='What would you rather' />
                </div>

                <div style={{ paddingTop: 15 }} onClick={() => {
                    navigate('/nhie')
                }}>
                    <GameCard gameName='Never have I ever' />
                </div>

                <div style={{ paddingTop: 15 }} onClick={() => {
                    navigate('/wmlt')
                }}>
                    <GameCard gameName="Who's most likely" />
                </div>

            </Box>

        </Box >
    )
}

export default MulipleGamesHome;