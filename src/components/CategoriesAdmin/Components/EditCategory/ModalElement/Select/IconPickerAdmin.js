import React from 'react';
import {FormControl, InputLabel, MenuItem, Select} from '@mui/material';
import {library} from '@fortawesome/fontawesome-svg-core';
import {fas} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

library.add(fas);

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

const iconOptions = Object.keys(fas).map((icon) => ({
    name: icon.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase(),
    label: icon.replace(/([a-z])([A-Z])/g, '$1 $2').replace(/^fa /, ''),
    prefix: 'fas',
}));

const IconPickerAdmin = ({value, onChange}) => {
    const formatIconValue = (iconName, prefix) => {
        return `${prefix} ${iconName}`;
    };

    const selectedIcon = iconOptions.find(
        (option) => formatIconValue(option.name, option.prefix) === value
    );

    return (
        <FormControl fullWidth sx={{...focusedTextFieldStyle}}>
            <InputLabel>Ikona kategorii</InputLabel>
            <Select
                value={value}
                onChange={(event) => {
                    if (onChange) {
                        onChange(event);
                    }
                }}
                label={'Ikona kategorii'}
                renderValue={() => (
                    <span>
                        <FontAwesomeIcon
                            icon={[selectedIcon.prefix, selectedIcon.name]}
                            size="lg"
                        />
                        {` ${selectedIcon.label}`}
                    </span>
                )}
            >
                {iconOptions.map((option, index) => (
                    <MenuItem
                        key={index}
                        value={formatIconValue(option.name, option.prefix)}
                    >
                        <span>
                            <FontAwesomeIcon
                                icon={[option.prefix, option.name]}
                                size="lg"
                            />
                            {` ${option.label}`}
                        </span>
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
};

export default IconPickerAdmin;

