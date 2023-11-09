import React from 'react';
import IconButton from '@mui/material/IconButton';
import {Close as CloseIcon} from '@mui/icons-material';

const CloseButton = ({onClick}) => {
    return (
        <IconButton onClick={onClick}>
            <CloseIcon style={{color: '#223E22'}}/>
        </IconButton>
    );
};

export default CloseButton;
