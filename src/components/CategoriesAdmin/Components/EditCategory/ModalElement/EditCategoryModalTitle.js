import {Typography} from "@mui/material";
import React from "react";

export default function EditCategoryModalTitle () {
    return (
        <Typography
            flexGrow={1}
            style={{marginLeft: '4px'}}
            className={'FontTitleModal'}
            variant={`h6`}
        >
            Edytuj kategorię
        </Typography>
    )
}
