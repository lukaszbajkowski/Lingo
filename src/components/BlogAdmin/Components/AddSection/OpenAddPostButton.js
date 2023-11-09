import Button from "@mui/material/Button";
import React from "react";

const OpenAddPostButton = ({onClick}) => {
    return (
        <Button
            variant="outlined"
            color="primary"
            onClick={onClick}
            fullWidth
            className={`OpenAddPostButton`}
            style={{margin: 0, flex: 1, marginRight: '8px'}}
        >
            Dodaj post
        </Button>
    );
}

export default OpenAddPostButton;
