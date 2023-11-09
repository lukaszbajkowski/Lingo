import {Typography} from "@mui/material";
import {Link as RouterLink} from "react-router-dom";
import React from "react";
import '../../../styles_components/style_content.scss'

function IntroductionUser (props) {
    const truncateWords = (text, wordCount) => {
        const words = text.split(' ');
        if (words.length <= wordCount) {
            return text;
        }
        return words.slice(0, wordCount).join(' ') + ' ...';
    };

    const truncatedBody = truncateWords(props.body, 40);

    return (
        <RouterLink
            to={`/post/${props.id}`}
            className={`HoverFont`}
        >
            <Typography variant='body1' gutterBottom className={`Font`}>
                {truncatedBody}
            </Typography>
        </RouterLink>
    );
}

export default IntroductionUser;
