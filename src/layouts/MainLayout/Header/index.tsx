


import React from 'react';
import { AppBar, Toolbar, Typography, makeStyles } from '@mui/material';
import LiquorIcon from '@mui/icons-material/Liquor';

import { COLORS } from '../../../utils/Colors';

function Header() {

    return (
        <AppBar position="static" sx={{ backgroundColor: COLORS.darkblue, mb: 2 }}>
            <Toolbar>
                <Typography variant="h6" sx={{ flexGrow: 1, textAlign: 'center' }}>
                    Que pario mamá!!
                </Typography>
                <LiquorIcon />
            </Toolbar>
        </AppBar>
    );
}

export default Header;