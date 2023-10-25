import React from 'react';
import Button from '@mui/material/Button';

const SaveEditButton = ({onClick}) => {
    return (
        <Button
            variant="contained"
            color="primary"
            onClick={onClick}
            fullWidth
            className={`EditPostButton`}
            style={{margin: 0, flex: 1}}
        >
            Zapisz zmiany
        </Button>
    );
};

export default SaveEditButton;
