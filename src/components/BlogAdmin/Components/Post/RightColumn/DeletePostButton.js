import Button from "@mui/material/Button";
import React from "react";

function DeletePostButton (props) {
    return (
        <Button
            variant="outlined"
            color="error"
            fullWidth
            className={`OpenAddPostButton`}
            onClick={() => {
                props.onDelete(props.id);
            }}
        >
            Usuń
        </Button>
    );
}

export default DeletePostButton;