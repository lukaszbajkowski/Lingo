import Button from "@mui/material/Button";
import React from "react";

function AddPostButton(props) {
    return (
        <Button
            variant="outlined"
            color="primary"
            className={`CategoryButton`}
            onClick={() => props.onDelete(props.id)}
        >
            Dodaj post
        </Button>
    );
}

export default AddPostButton;