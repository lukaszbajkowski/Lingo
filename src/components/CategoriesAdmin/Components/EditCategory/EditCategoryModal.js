import React from "react";
import Modal from "@mui/material/Modal";
import {Box, Container, Paper} from "@mui/material";
import CloseButton from "../../../BlogAdmin/Components/AddPost/ModalElement/Buttons/CloseButton";
import EditCategory from "./EditCategory";
import EditCategoryModalTitle from "./ModalElement/EditCategoryModalTitle";

class EditCategoryModal extends React.Component {
    render () {
        const {
            isOpen,
            editCategory,
            toggleModal,
            editCategoryHandler,
        } = this.props;

        const modalStyle = {
            bgcolor: 'background.paper',
            position: 'absolute',
            boxShadow: 24,
            p: 4,
            borderRadius: 3,
            maxHeight: '85vh',
            overflowY: 'auto',
        };

        console.log('Short Description:', editCategory);

        return (
            <Modal
                open={isOpen}
                onClose={toggleModal}
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
                            <EditCategoryModalTitle/>
                            <Box>
                                <CloseButton
                                    onClick={toggleModal}
                                />
                            </Box>
                        </Box>
                        <Box className={`InputTitleContainer`}>
                            <EditCategory
                                id={editCategory._id}
                                name={editCategory.name}
                                description={editCategory.description}
                                shortDescription={editCategory.shortdesc}
                                icon={editCategory.icon}
                                color={editCategory.color}
                                iconColor={editCategory.iconColor}
                                onEdit={category => editCategoryHandler(category)}
                                toggleModal={toggleModal}
                            />
                        </Box>
                    </Paper>
                </Container>
            </Modal>
        );
    }
}

export default EditCategoryModal;