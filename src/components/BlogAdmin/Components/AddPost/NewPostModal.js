import React from 'react';
import {Box, Container, Modal, Paper} from '@mui/material';
import Title from "./ModalElement/Input/Title";
import Desc from "./ModalElement/Input/Desc";
import CloseButton from "./ModalElement/Buttons/CloseButton";
import ModalTitle from "./ModalElement/ModalTitle";
import CancelButton from "./ModalElement/Buttons/CancelButton";
import AddButton from "./ModalElement/Buttons/AddButton";
import Category from "./ModalElement/Select/Category";

const modalStyle = {
    bgcolor: 'background.paper',
    position: 'absolute',
    boxShadow: 24,
    p: 4,
    borderRadius: 3,
    maxHeight: '85vh',
    overflowY: 'auto',
};

function NewPostModal (props) {
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
                    <Box mt={2}>
                        <Desc
                            value={props.desc}
                            onChange={props.onDescChange}
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
