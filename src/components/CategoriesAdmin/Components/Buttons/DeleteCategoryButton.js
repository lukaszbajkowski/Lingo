import React from "react";
import DeletePostButton from "../../../BlogAdmin/Components/Post/RightColumn/DeletePostButton";

function DeleteCategoryButton (props) {
    return (
        <DeletePostButton
            id={props.id}
            onDelete={props.onDelete}
        />
    );
}

export default DeleteCategoryButton;