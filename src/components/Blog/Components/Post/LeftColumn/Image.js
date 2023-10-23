import {Link as RouterLink} from "react-router-dom";
import React from "react";
import Image from "../../../../Background/young-man-learning-virtual-classroom.jpg";

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