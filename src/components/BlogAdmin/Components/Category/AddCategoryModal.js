import React, {useState} from "react";
import {Box, Container, Modal, Paper, Typography} from "@mui/material";
import ModalTitle from "./ModalElement/ModalTitle";
import Title from "../AddPost/ModalElement/Input/Title";
import CloseButton from "../AddPost/ModalElement/Buttons/CloseButton";
import CancelButton from "./ModalElement/Buttons/CancelCategoryButton";
import AddButton from "./ModalElement/Buttons/AddCategoryButton";
import {lightenHexColor} from "./ColorUtilities";
import ColorPicker from "./ModalElement/ColorPicker";
import IconPicker from "./ModalElement/IconPicker";
import ShortDesc from "./ModalElement/Input/ShortDesc";
import ReactQuill from "react-quill";

const AddCategoryModal = ({isOpen, toggleModal, addCategory}) => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [shortdesc, setShortDesc] = useState("");
    const [selectedIcon, setSelectedIcon] = useState('');
    const [color, setColor] = useState('');
    const [isFocused, setIsFocused] = useState(false);

    const handleIconChange = (iconName) => {
        setSelectedIcon(iconName);
    };

    const handleAddCategory = () => {
        const newCategory = {
            name,
            description,
            shortdesc,
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
        setShortDesc("");
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

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
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
                            value={description}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                            onChange={(newValue) => setDescription(newValue)}
                        />
                    </Box>
                    <Box mt={2}>
                        <ShortDesc
                            value={shortdesc}
                            onChange={(e) => setShortDesc(e.target.value)}
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
