import React from 'react';
import Button from '@mui/material/Button';

const AddButton = ({onClick}) => {
    return (
        <Button
            variant="contained"
            color="primary"
            onClick={onClick}
            fullWidth
            className={`AddCategoryButton`}
            style={{margin: 0, flex: 1}}
        >
            Utwórz kategorię
        </Button>
    );
};

export default AddButton;
