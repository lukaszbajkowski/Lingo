import React from "react";
import Modal from "@mui/material/Modal";
import {Box, Container, Paper} from "@mui/material";
import EditModalTitle from "../EditPost/ModalElement/EditModalTitle";
import CloseButton from "../AddPost/ModalElement/Buttons/CloseButton";
import EditPost from "./EditPost";

class EditPostModal extends React.Component {
    render() {
        const {
            isOpen,
            editNote,
            toggleModal,
            editNoteHandler
        } = this.props;

        const ModalStyle = {
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
            borderRadius: 3,
        };

        return (
            <Modal
                open={isOpen}
                onClose={toggleModal}
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
                            <EditModalTitle/>
                            <Box>
                                <CloseButton
                                    onClick={toggleModal}
                                />
                            </Box>
                        </Box>
                        <Box className={`InputTitleContainer`}>
                            <EditPost
                                title={editNote.title}
                                body={editNote.body}
                                category={editNote.category}
                                id={editNote._id}
                                onEdit={note => editNoteHandler(note)}
                                toggleModal={toggleModal}
                            />
                        </Box>
                    </Paper>
                </Container>
            </Modal>
        );
    }
}

export default EditPostModal;