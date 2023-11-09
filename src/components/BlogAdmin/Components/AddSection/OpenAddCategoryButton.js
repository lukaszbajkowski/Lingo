import Button from "@mui/material/Button";
import React from "react";

const OpenAddCategoryButton = ({onClick}) => {
    return (
        <Button
            variant="outlined"
            color="primary"
            onClick={onClick}
            fullWidth
            className={`OpenAddCategoryButton`}
            style={{margin: 0, flex: 1, margingLeft: "8px"}}
        >
            Dodaj kategorię
        </Button>
    );
}

export default OpenAddCategoryButton;
