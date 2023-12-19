import PersonIcon from '@mui/icons-material/Person';
import ForumIcon from '@mui/icons-material/Forum';
import { IconButton } from '@mui/material';
import './Header.css';

import React from 'react';

const Header = () => {
    return (
        <div className="header">
            <IconButton>
                <PersonIcon fontsize="large" className="header__icon" />
            </IconButton>
            <img width="20px" height="20px" className="header__logo" src="logo192.png" alt="header" />
            <IconButton>
                <ForumIcon fontsize="large" className="header__icon" />
            </IconButton>
        </div>
    );
};

export default Header;
