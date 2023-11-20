import React, {useState} from "react";
import {Box} from "@mui/material";
import Title from "../../../BlogAdmin/Components/AddPost/ModalElement/Input/Title";
import Desc from "../../../BlogAdmin/Components/AddPost/ModalElement/Input/Desc";
import CancelEditButton from "../../../BlogAdmin/Components/EditPost/ModalElement/Buttons/CancelEditButton";
import SaveEditButton from "../../../BlogAdmin/Components/EditPost/ModalElement/Buttons/SaveEditButton";
import IconPickerAdmin from "./ModalElement/Select/IconPickerAdmin";
import ColorPicker from "../../../BlogAdmin/Components/Category/ModalElement/ColorPicker";
import {lightenHexColor} from "../../../BlogAdmin/Components/Category/ColorUtilities";
import ShortDesc from "../../../BlogAdmin/Components/Category/ModalElement/Input/ShortDesc";

export default function EditCategory (props) {
    const [name, setName] = useState(props.name);
    const [desc, setDesc] = useState(props.description);
    const [shortdesc, setShortDesc] = useState(props.shortDescription);
    const [icon, setIcon] = useState(props.icon);
    const [color, setColor] = useState(props.color);

    const changNameHandler = (event) => {
        const value = event.target.value;
        setName(value);
    }

    const changeDescHandler = (event) => {
        const value = event.target.value;
        setDesc(value);
    }

    const changeShortDescHandler = (event) => {
        const value = event.target.value;
        setShortDesc(value);
    }

    const changeIconHandler = (event) => {
        const value = event.target.value;
        setIcon(value);
    }

    const changColorHandler = (event) => {
        const value = event.hex;
        setColor(value);
    }

    const editCategory = () => {
        const note = {
            name: name,
            description: desc,
            shortdesc: shortdesc,
            icon: icon,
            color: color,
            iconColor: lightenHexColor(color, 90),
            _id: props.id
        };
        props.onEdit(note);
    }

    return (
        <div>
            <Box className={`InputTitleContainer`}>
                <Title
                    value={name}
                    onChange={changNameHandler}
                />
            </Box>
            <Box mt={2}>
                <Desc
                    value={desc}
                    onChange={changeDescHandler}
                />
            </Box>
            <Box mt={2}>
                <ShortDesc
                    value={shortdesc}
                    onChange={changeShortDescHandler}
                />
            </Box>
            <Box mt={2}>
                <IconPickerAdmin
                    value={icon}
                    onChange={changeIconHandler}
                />
            </Box>
            <Box mt={2} className={`BoxColorPickerModal`}>
                <ColorPicker
                    value={color}
                    onChange={changColorHandler}
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
                    onClick={() => editCategory()}
                />
            </Box>

        </div>
    );
}
