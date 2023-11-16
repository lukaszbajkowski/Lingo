import {Typography} from "@mui/material";
import {CirclePicker} from "react-color";
import React from "react";

export default function ColorPicker (props) {
    return (
        <div>
            <Typography
                flexGrow={1}
                className={'FontColorPickerModal'}
            >
                Kolor kategorii
            </Typography>
            <CirclePicker
                width="100%"
                circleSize={28}
                circleSpacing={16}
                color={props.value}
                onChangeComplete={props.onChange}
            />
        </div>
    )
}
