


import React from 'react';
import { AppBar, Toolbar, Typography, makeStyles } from '@mui/material';
import LiquorIcon from '@mui/icons-material/Liquor';
import HomeIcon from '@mui/icons-material/Home';


import { COLORS } from '../../../utils/Colors';
import { useNavigate } from 'react-router-dom';

function Header() {

    const navigate = useNavigate();

    return (
        <AppBar position="static" sx={{ backgroundColor: COLORS.darkblue, mb: 2 }}>
            <Toolbar>
                <div onClick={() => { navigate('/'); }}>
                    <HomeIcon />
                </div>
                <Typography variant="h6" sx={{ flexGrow: 1, textAlign: 'center' }}>
                    Que pario mamá!!
                </Typography>
                <LiquorIcon />
            </Toolbar>
        </AppBar>
    );
}

export default Header;