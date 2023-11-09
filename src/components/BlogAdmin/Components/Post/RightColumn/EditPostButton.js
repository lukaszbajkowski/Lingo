import Button from "@mui/material/Button";
import React from "react";

function EditPostButton (props) {
    return (
        <Button
            variant="outlined"
            color="primary"
            fullWidth
            className={`OpenAddPostButton`}
            onClick={props.editHandler}
        >
            Edytuj
        </Button>
    );
}

export default EditPostButton;