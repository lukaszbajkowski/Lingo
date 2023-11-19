import React from "react";
import EditPostButton from "../../../BlogAdmin/Components/Post/RightColumn/EditPostButton";

function EditCategoryButton (props) {
    return (
        <EditPostButton
            editHandler={props.editHandler}
        />
    );
}

export default EditCategoryButton;