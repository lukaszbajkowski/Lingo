import React from 'react';
import Button from '@mui/material/Button';

const CancelEditButton = ({onClick}) => {
    return (
        <Button
            variant="outlined"
            color="primary"
            onClick={onClick}
            fullWidth
            className={`CancelEditPostButton`}
            style={{margin: 0, flex: 1, marginRight: '8px'}}
        >
            Odrzuć edycję
        </Button>
    );
};

export default CancelEditButton;
