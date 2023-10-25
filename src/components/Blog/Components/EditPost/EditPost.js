import React, {useState} from "react";
import {Box} from "@mui/material";
import CancelEditButton from "./ModalElement/Buttons/CancelEditButton";
import SaveEditButton from "./ModalElement/Buttons/SaveEditButton";
import Title from "../AddPost/ModalElement/Input/Title";
import Desc from "../AddPost/ModalElement/Input/Desc";

export default function EditPost (props) {
    const [title, setTitle] = useState(props.title);
    const [desc, setDesc] = useState(props.body);

    const changeTitleHandler = (event) => {
        const value = event.target.value;
        setTitle(value);
    }

    const changeDescHandler = (event) => {
        const value = event.target.value;
        setDesc(value);
    }

    const editNote = () => {
        const note = {
            title: title,
            body: desc,
            _id: props.id
        };
        props.onEdit(note);
    }

    return (
        <div>
            <Box className={`InputTitleContainer`}>
                <Title
                    value={title}
                    onChange={changeTitleHandler}
                />
            </Box>
            <Box mt={2}>
                <Desc
                    value={desc}
                    onChange={changeDescHandler}
                />
            </Box>
            <Box
                mt={2}
                className={`ButtonContainer`}
            >
                <CancelEditButton
                    onClick={props.toggleModal}
                />
                <SaveEditButton
                    onClick={() => editNote()}
                />
            </Box>

        </div>
    );
}
