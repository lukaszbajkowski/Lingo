import React from 'react';
import { Link } from 'react-router-dom';
import Button from "@mui/material/Button";

function CategoryLinkButton (props){
    return (
        <Link to={`/category/${props.id}`}>
            <Button
                variant="outlined"
                color="primary"
                fullWidth
                className={`OpenAddPostButton`}
            >
                Przejdź do kategorii
            </Button>
        </Link>
    );
};

export default CategoryLinkButton;
