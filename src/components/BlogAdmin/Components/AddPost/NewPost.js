import React, {useEffect, useState} from 'react';
import axios from "../../../../axios";
import NewPostModal from "./NewPostModal";
import OpenAddPostButton from "../AddSection/OpenAddPostButton"; // Importuj moduł Axios

function NewPost (props) {
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [category, setCategory] = useState('');
    const [categories, setCategories] = useState([]); // Dodaj stan kategorii
    const [open, setOpen] = useState(false);

    useEffect(() => {
        fetchCategories();
    }, []);

    const fetchCategories = async () => {
        try {
            const response = await axios.get('/categories');
            setCategories(response.data);
        } catch (error) {
            console.error('Błąd podczas pobierania kategorii:', error);
        }
    };

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
            category: category,
        };
        props.onAdd(note);

        setTitle('');
        setDesc('');
        setCategory('');
        handleClose();
    };

    return (
        <div style={{display: `contents`}}>
            <OpenAddPostButton
                onClick={handleOpen}
            />

            <NewPostModal
                open={open}
                onClose={handleClose}
                title={title}
                onTitleChange={(event) => setTitle(event.target.value)}
                desc={desc}
                onDescChange={(event) => setDesc(event.target.value)}
                category={category}
                onCategoryChange={(event) => setCategory(event.target.value)}
                categories={categories}
                onAddNote={addNote}
            />
        </div>
    );
}

export default NewPost;
