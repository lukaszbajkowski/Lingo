import React, {useState} from "react";
import {Box, Typography} from "@mui/material";
import CancelEditButton from "./ModalElement/Buttons/CancelEditButton";
import SaveEditButton from "./ModalElement/Buttons/SaveEditButton";
import Title from "../AddPost/ModalElement/Input/Title";
import CategorySelect from "./ModalElement/Select/Category";
import ReactQuill from "react-quill";
import ShortBody from "../AddPost/ModalElement/Input/ShortBody";

export default function EditPost (props) {
    const [title, setTitle] = useState(props.title);
    const [desc, setDesc] = useState(props.body);
    const [shortbody, setShortBody] = useState(props.shortbody);
    const [category, setCategory] = useState(props.category);
    const [isFocused, setIsFocused] = useState(false);

    const changeTitleHandler = (event) => {
        const value = event.target.value;
        setTitle(value);
    }

    const changeDescHandler = (event) => {
        setDesc(event);
    }

    const changeShortBodyHandler = (event) => {
        const value = event.target.value;
        setShortBody(value);
    }

    const changeCategoryHandler = (event) => {
        const value = event.target.value;
        setCategory(value);
    }

    const editNote = () => {
        const note = {
            title: title,
            body: desc,
            shortbody: shortbody,
            category: category,
            _id: props.id
        };
        props.onEdit(note);
    }

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };

    return (
        <div>
            <Box className={`InputTitleContainer`}>
                <Title
                    value={title}
                    onChange={changeTitleHandler}
                />
            </Box>
            <Box
                mt={2}
                className={`quill-container ${isFocused ? 'focused' : ''}`}
            >
                <Typography
                    flexGrow={1}
                    className={'InputBorder'}
                >
                    Treść
                </Typography>
                <ReactQuill
                    value={desc}
                    onChange={changeDescHandler}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                />
            </Box>
            <Box mt={2}>
                <ShortBody
                    value={shortbody}
                    onChange={changeShortBodyHandler}
                />
            </Box>
            <Box mt={2}>
                <CategorySelect
                    value={category}
                    categories={props.categories}
                    onCategoryChange={changeCategoryHandler}
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
