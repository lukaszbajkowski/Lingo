import React from "react";
import '../../../../styles_components/style_content.scss'
import IntroductionUser from "../../../../BlogUser/Components/Texts/IntroductionUser";

function Introduction (props) {
    return (
        <IntroductionUser
            body={props.body}
            id={props.id}
        />
    );
}

export default Introduction;
