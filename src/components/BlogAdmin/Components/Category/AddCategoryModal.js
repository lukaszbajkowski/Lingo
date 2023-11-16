import React, {useState} from "react";
import {Box, Container, Modal, Paper} from "@mui/material";
import ModalTitle from "./ModalElement/ModalTitle";
import Title from "../AddPost/ModalElement/Input/Title";
import Desc from "../AddPost/ModalElement/Input/Desc";
import CloseButton from "../AddPost/ModalElement/Buttons/CloseButton";
import CancelButton from "./ModalElement/Buttons/CancelCategoryButton";
import AddButton from "./ModalElement/Buttons/AddCategoryButton";
import {lightenHexColor} from "./ColorUtilities";
import ColorPicker from "./ModalElement/ColorPicker";
import IconPicker from "./ModalElement/IconPicker";

const AddCategoryModal = ({isOpen, toggleModal, addCategory}) => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [selectedIcon, setSelectedIcon] = useState('');
    const [color, setColor] = useState('');

    const handleIconChange = (iconName) => {
        setSelectedIcon(iconName);
    };

    const handleAddCategory = () => {
        const newCategory = {
            name,
            description,
            icon: selectedIcon,
            color,
            iconColor: lightenHexColor(color, 90),
        };

        addCategory(newCategory);
        handlecloseAddCategory();
    };

    const handlecloseAddCategory = () => {
        setName("");
        setDescription("");
        setSelectedIcon("");
        setColor("");
        toggleModal();
    };

    const modalStyle = {
        bgcolor: 'background.paper',
        position: 'absolute',
        boxShadow: 24,
        p: 4,
        borderRadius: 3,
        maxHeight: '85vh',
        overflowY: 'auto',
    };

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
                    <Box mt={2} className={`BoxColorPickerModal`}>
                        <ColorPicker
                            value={color}
                            onChange={(newColor) => setColor(newColor.hex)}
                        />
                    </Box>
                    <Box
                        mt={2}
                        className={`ButtonContainer`}
                    >
                        <CancelButton
                            onClick={handlecloseAddCategory}
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
