import { Box, Typography, Button } from '@mui/material';
import { COLORS } from '../../../utils/Colors';
import { TEXTS } from '../../../utils/Texts';
import SportsBarIcon from '@mui/icons-material/SportsBar';
import { useState } from 'react';
import { getRandomItem } from '../../../utils/Data';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import SkipNextIcon from '@mui/icons-material/SkipNext';


interface DisplayQuestionPros {
    answer: string;
    showAnswer: boolean;
    handleShowAnswer: () => void;
}

const DisplayQuestion = (props: DisplayQuestionPros) => {

    const { answer, showAnswer, handleShowAnswer } = props;

    return (
        <>
            {(showAnswer) && (
                <Typography gutterBottom sx={{
                    color: COLORS.primary,
                    fontSize: '18px',
                    fontWeight: '600',
                    textAlign: 'center',
                    pt: 4,
                }}>
                    {answer}
                </Typography>)}
            <Box display="flex"
                alignItems={'center'} justifyContent={'space-evenly'} pt={4}
            >
                <Button variant="contained" onClick={handleShowAnswer}>Mostrar respuesta</Button>
            </Box>
        </>
    )
}

export default DisplayQuestion;