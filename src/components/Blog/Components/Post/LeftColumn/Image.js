import {Link as RouterLink} from "react-router-dom";
import React from "react";

function ImagePost() {
    return (
        <RouterLink
            to="/"
        >
            <div className={`Content`}></div>
        </RouterLink>
    );
}

export default ImagePost;