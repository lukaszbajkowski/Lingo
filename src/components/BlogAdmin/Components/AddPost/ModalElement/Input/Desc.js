import {TextField} from "@mui/material";
import * as PropTypes from "prop-types";
import React from "react";

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


export default function Desc (props) {
    return (
        <TextField
            label="Treść"
            type="text"
            fullWidth
            multiline
            rows={11}
            value={props.value}
            onChange={props.onChange}
            sx={{...focusedTextFieldStyle}}
            className={'Font'}
        />
    )
}

Desc.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func
};