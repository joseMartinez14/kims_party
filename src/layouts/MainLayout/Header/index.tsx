


import React from 'react';
import { AppBar, Toolbar, Typography, makeStyles } from '@mui/material';
import LiquorIcon from '@mui/icons-material/Liquor';
import HomeIcon from '@mui/icons-material/Home';


import { COLORS } from '../../../utils/Colors';
import { useNavigate } from 'react-router-dom';

function Header() {

    const navigate = useNavigate();

    return (
        <AppBar position="static" sx={{ backgroundColor: 'transparent', boxShadow: 'none', height: '7vh' }}>
            <Toolbar>
                <div onClick={() => { navigate('/'); }}>
                    <HomeIcon sx={{ width: '35px', height: '40px' }} />
                </div>
            </Toolbar>
        </AppBar>
    );
}

export default Header;