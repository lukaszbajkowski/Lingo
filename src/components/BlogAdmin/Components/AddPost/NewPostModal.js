import React, {useState} from 'react';
import {Box, Container, Modal, Paper, Typography} from '@mui/material';
import CloseButton from "./ModalElement/Buttons/CloseButton";
import ModalTitle from "./ModalElement/ModalTitle";
import CancelButton from "./ModalElement/Buttons/CancelButton";
import AddButton from "./ModalElement/Buttons/AddButton";
import Category from "./ModalElement/Select/Category";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Title from "./ModalElement/Input/Title";
import ShortBody from "./ModalElement/Input/ShortBody";

const modalStyle = {
    bgcolor: 'background.paper',
    position: 'absolute',
    boxShadow: 24,
    p: 4,
    borderRadius: 3,
    maxHeight: '85vh',
    overflowY: 'auto',
};

const NewPostModal = (props) => {
    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };
    return (
        <Modal
            open={props.open}
            onClose={props.onClose}
        >
            <Container maxWidth="sm">
                <Paper
                    elevation={3}
                    sx={modalStyle}
                    className={`ModalContainer`}
                >
                    <Box
                        display="flex"
                        alignItems="center"
                    >
                        <ModalTitle/>
                        <Box>
                            <CloseButton
                                onClick={props.onClose}
                            />
                        </Box>
                    </Box>
                    <Box className={`InputTitleContainer`}>
                        <Title
                            value={props.title}
                            onChange={props.onTitleChange}
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
                            value={props.desc}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                            onChange={(newValue) => props.onDescChange(newValue)}
                        />
                    </Box>
                    <Box mt={2}>
                        <ShortBody
                            value={props.shortbody}
                            onChange={props.onShortBodyChange}
                        />
                    </Box>
                    <Box mt={2}>
                        <Category
                            category={props.category}
                            categories={props.categories}
                            onCategoryChange={props.onCategoryChange}
                        />
                    </Box>
                    <Box
                        mt={2}
                        className={`ButtonContainer`}
                    >
                        <CancelButton
                            onClick={props.onCancel}
                        />
                        <AddButton
                            onClick={props.onAddNote}
                        />
                    </Box>
                </Paper>
            </Container>
        </Modal>
    );
}

export default NewPostModal;
