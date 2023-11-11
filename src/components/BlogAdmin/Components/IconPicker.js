import React from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import * as FaIcons from 'react-icons/fa';

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

// Pobierz wszystkie ikony z Font Awesome
const iconOptions = Object.entries(FaIcons).map(([key, value]) => ({
    label: key.replace(/([a-z])([A-Z])/g, '$1 $2'), // Dodaj spację między wielkimi literami
    value: React.createElement(value),
}));

const IconPicker = ({ value, onChange }) => {
    return (
        <FormControl fullWidth sx={{ ...focusedTextFieldStyle }}>
            <InputLabel>Ikona kategorii</InputLabel>
            <Select
                value={value}
                onChange={onChange}
                label={'Ikona kategorii'}
            >
                {iconOptions.map((option, index) => (
                    <MenuItem key={index} value={option.label}>
                        <span>{option.value}</span>
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
};

export default IconPicker;
