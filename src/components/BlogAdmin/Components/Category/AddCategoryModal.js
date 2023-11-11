import React, {useState} from "react";
import {Box, Container, Modal, Paper} from "@mui/material";
import ModalTitle from "./ModalElement/ModalTitle";
import Title from "../AddPost/ModalElement/Input/Title";
import Desc from "../AddPost/ModalElement/Input/Desc";
import CloseButton from "../AddPost/ModalElement/Buttons/CloseButton";
import CancelButton from "./ModalElement/Buttons/CancelCategoryButton";
import AddButton from "./ModalElement/Buttons/AddCategoryButton";
import IconPicker from "../IconPicker";

const AddCategoryModal = ({isOpen, toggleModal, addCategory}) => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [selectedIcon, setSelectedIcon] = useState('');

    const handleIconChange = (event) => {
        setSelectedIcon(event.target.value);
    };

    const handleAddCategory = () => {
        const newCategory = {
            name: name,
            description: description,
            icon: selectedIcon,
        };

        addCategory(newCategory);
        setName("");
        setDescription("");
        setSelectedIcon("");
        toggleModal();
    };

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
                        <ModalTitle/>
                        <Box>
                            <CloseButton
                                onClick={toggleModal}
                            />
                        </Box>
                    </Box>
                    <Box className={`InputTitleContainer`}>
                        <Title
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </Box>
                    <Box mt={2}>
                        <Desc
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </Box>
                    <Box mt={2}>
                        <IconPicker
                            value={selectedIcon}
                            onChange={handleIconChange}
                        />
                    </Box>
                    <Box
                        mt={2}
                        className={`ButtonContainer`}
                    >
                        <CancelButton
                            onClick={toggleModal}
                        />
                        <AddButton
                            onClick={handleAddCategory}
                        />
                    </Box>
                </Paper>
            </Container>
        </Modal>
    );
};

export default AddCategoryModal;
