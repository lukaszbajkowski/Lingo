import React from 'react';
import { Link } from 'react-router-dom';
import Button from "@mui/material/Button";

function PostLinkButton (props){
    return (
        <Link to={`/post/${props.id}`}>
            <Button
                variant="outlined"
                color="primary"
                fullWidth
                className={`OpenAddPostButton`}
            >
                Przejdź do postu
            </Button>
        </Link>
    );
};

export default PostLinkButton;
