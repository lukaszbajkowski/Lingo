import React from 'react';
import { Modal, Container, Paper, Box } from '@mui/material';
import Title from "./ModalElement/Input/Title";
import Desc from "./ModalElement/Input/Desc";
import CloseButton from "./ModalElement/Buttons/CloseButton";
import ModalTitle from "./ModalElement/ModalTitle";
import CancelButton from "./ModalElement/Buttons/CancelButton";
import AddButton from "./ModalElement/Buttons/AddButton";

const ModalStyle = {
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    borderRadius: 3,
};

function NewPostModal(props) {
    return (
        <Modal
            open={props.open}
            onClose={props.onClose}
        >
            <Container maxWidth="sm">
                <Paper
                    elevation={3}
                    sx={ModalStyle}
                    className={`ModalContainer`}
                >
                    <Box
                        display="flex"
                        alignItems="center"
                    >
                        <ModalTitle />
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
                    <Box
                        mt={2}
                        className={`ButtonContainer`}
                    >
                        <CancelButton
                            onClick={props.onClose}
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
