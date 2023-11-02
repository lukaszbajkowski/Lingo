import {Typography} from "@mui/material";
import React from "react";

export default function ModalTitle () {
    return (
        <Typography
            flexGrow={1}
            style={{marginLeft: '4px'}}
            className={'FontTitleModal'}
            variant={`h6`}
        >
            Dodaj kategorię
        </Typography>
    )
}
