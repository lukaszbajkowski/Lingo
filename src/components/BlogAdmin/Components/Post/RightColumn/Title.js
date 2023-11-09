import React from "react";
import '../../../../styles_components/style_content.scss'
import TitleUser from "../../../../BlogUser/Components/Texts/TitleUser";

function Title (props) {
    return (
        <TitleUser
            title={props.title}
            id={props.id}
        />
    )
}

export default Title;