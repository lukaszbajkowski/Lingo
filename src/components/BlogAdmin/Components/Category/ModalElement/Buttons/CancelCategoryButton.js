import React from 'react';
import Button from '@mui/material/Button';

const CancelButton = ({onClick}) => {
    return (
        <Button
            variant="outlined"
            color="primary"
            onClick={onClick}
            fullWidth
            className={`CancelAddCategoryButton`}
            style={{margin: 0, flex: 1, marginRight: '8px'}}
        >
            Anuluj kategorię
        </Button>
    );
};

export default CancelButton;
