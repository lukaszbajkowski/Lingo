import React, {useState} from "react";
import {Box} from "@mui/material";
import CancelEditButton from "./ModalElement/Buttons/CancelEditButton";
import SaveEditButton from "./ModalElement/Buttons/SaveEditButton";
import Title from "../AddPost/ModalElement/Input/Title";
import Desc from "../AddPost/ModalElement/Input/Desc";
import Category from "../AddPost/ModalElement/Input/Category";

export default function EditPost (props) {
    const [title, setTitle] = useState(props.title);
    const [desc, setDesc] = useState(props.body);
    const [category, setCategory] = useState(props.category);

    const changeTitleHandler = (event) => {
        const value = event.target.value;
        setTitle(value);
    }

    const changeDescHandler = (event) => {
        const value = event.target.value;
        setDesc(value);
    }

    const changeCategoryHandler = (event) => {
        const value = event.target.value;
        setCategory(value);
    }

    const editNote = () => {
        const note = {
            title: title,
            body: desc,
            category: category,
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
            <Box mt={2}>
                <Category
                    value={category}
                    onChange={changeCategoryHandler}
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
