import {Link as RouterLink} from "react-router-dom";
import React from "react";

function ImageUser (props) {
    return (
        <RouterLink
            to={`/post/${props.id}`}
            className={`HoverFont`}
        >
            <div className={`Content${props.className}`}></div>
        </RouterLink>
    );
}

export default ImageUser;