import React, {useState} from 'react';
import NewPostModal from './NewPostModal';
import Button from "@mui/material/Button";

function NewPost (props) {
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const addNote = () => {
        const note = {
            title: title,
            body: desc,
        };
        props.onAdd(note);

        setTitle('');
        setDesc('');
        handleClose();
    };

    return (
        <div>
            <Button onClick={handleOpen}>
                Open Modal
            </Button>

            <NewPostModal
                open={open}
                onClose={handleClose}
                title={title}
                onTitleChange={(event) => setTitle(event.target.value)}
                desc={desc}
                onDescChange={(event) => setDesc(event.target.value)}
                onAddNote={addNote}
            />
        </div>
    );
}

export default NewPost;
