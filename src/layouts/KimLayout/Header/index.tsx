


import React from 'react';
import { AppBar, Toolbar, Typography, makeStyles } from '@mui/material';
import CakeIcon from '@mui/icons-material/Cake';

import { COLORS } from '../../../utils/Colors';

function Header() {

    return (
        <AppBar position="static" sx={{ backgroundColor: COLORS.barbiePink, mb: 2 }}>
            <Toolbar>
                <Typography variant="h6" sx={{ flexGrow: 1, textAlign: 'center' }}>
                    Kimi's Party
                </Typography>
                <CakeIcon />
            </Toolbar>
        </AppBar>
    );
}

export default Header;