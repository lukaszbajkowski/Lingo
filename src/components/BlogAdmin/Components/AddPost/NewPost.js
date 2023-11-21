import React, {useEffect, useState} from 'react';
import axios from "../../../../axios";
import NewPostModal from "./NewPostModal";
import OpenAddPostButton from "../AddSection/OpenAddPostButton"; // Importuj moduł Axios

function NewPost (props) {
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [shortbody, setShortbody] = useState('');
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

    const handleCloseAddCategory = () => {
        setTitle('');
        setDesc('');
        setCategory('');
        handleClose();
    };

    const addNote = () => {
        const note = {
            title: title,
            body: desc,
            shortbody: shortbody,
            category: category,
        };
        props.onAdd(note);

        setTitle('');
        setDesc('');
        setShortbody('');
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
                onCancel={handleCloseAddCategory}
                title={title}
                onTitleChange={(event) => setTitle(event.target.value)}
                desc={desc}
                onDescChange={(value) => setDesc(value)}
                shortbody={shortbody}
                onShortBodyChange={(event) => setShortbody(event.target.value)}
                category={category}
                onCategoryChange={(event) => setCategory(event.target.value)}
                categories={categories}
                onAddNote={addNote}
            />
        </div>
    );
}

export default NewPost;
