import React from "react";
import "./SwipeButtons.css";

import ReplayTwoToneIcon from '@mui/icons-material/ReplayTwoTone';
import CloseTwoToneIcon from '@mui/icons-material/CloseTwoTone';
import StarsTwoToneIcon from '@mui/icons-material/StarsTwoTone';
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';
import FlashOnTwoToneIcon from '@mui/icons-material/FlashOnTwoTone';
import { IconButton } from '@mui/material';

const SwipeButtons = () => {
    return (
        <div className="swipeButtons">
            <IconButton>
                <ReplayTwoToneIcon className="swipeButtons__repeat" />
            </IconButton>
            <IconButton>
                <CloseTwoToneIcon className="swipeButtons__left" />
            </IconButton>
            <IconButton>
                <StarsTwoToneIcon className="swipeButtons__star" />
            </IconButton>
            <IconButton>
                <FavoriteTwoToneIcon className="swipeButtons__right" />
            </IconButton>
            <IconButton>
                <FlashOnTwoToneIcon className="swipeButtons__lightning" />
            </IconButton>
        </div>
    );
};

export default SwipeButtons;