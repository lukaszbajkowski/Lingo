import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const focusedTextFieldStyle = {
    '& .MuiOutlinedInput-root': {
        borderRadius: '12px',
        color: '#223E22',
        fontFamily: "'Plus Jakarta Sans', sans-serif !important",
    },
    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
        borderColor: '#172b17',
        transition: '0.3s',
    },
    '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
        borderColor: '#223E22',
        transition: '0.3s',
    },
    '& .MuiOutlinedInput-root.Mui-focused .MuiInputBase-input, & .MuiInputLabel-root': {
        color: '#223E22',
        fontFamily: "'Plus Jakarta Sans', sans-serif !important",
        transition: '0.3s',
    },
};

function CategorySelect(props) {
    return (
        <FormControl fullWidth sx={{...focusedTextFieldStyle}}>
            <InputLabel id="category-label">Kategoria</InputLabel>
            <Select
                labelId="category-label"
                id="category"
                value={props.category}
                onChange={props.onCategoryChange}
                label="Kategoria"
            >
                {props.categories.map((category) => (
                    <MenuItem key={category._id} value={category._id}>
                        {category.name}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
}

export default CategorySelect;
