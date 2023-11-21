import React from "react";
import ImageUser from "../../../../BlogUser/Components/Img/ImageUser";

function ImagePost (props) {
    return (
        <ImageUser
            id={props.id}
            className={props.className}
        />
    );
}

export default ImagePost;