import React from "react";
import '../../styles_components/style_content.scss';
import Posts from "./Posts";
import NewPost from "./AddPost/NewPost";
import axios from "../../../axios";
import EditPostModal from "./EditPost/EditPostModal";
import AddCategory from "./Category/AddCategory";
import {Box} from "@mui/material";
import AnimatedElement from "../../Animation/AnimatedElementOnce";

class ContentAdmin extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            notes: [],
            categories: [],
            editNote: {},
            showEditModal: false,
            showAddCategoryModal: false,
        }
    }

    componentDidMount () {
        this.fetchNotes();
        this.fetchCategories();
    }

    async fetchNotes () {
        const res = await axios.get('/posts');
        const notes = res.data;
        this.setState({notes});
    }

    async fetchCategories () {
        const res = await axios.get('/categories');
        const categories = res.data;
        this.setState({categories});
    }

    async deleteNote (id) {
        const notes = [...this.state.notes]
            .filter(note => note._id !== id);

        await axios.delete(`/posts/` + id);
        this.setState({notes});
    }

    async addNote (note) {
        const notes = [...this.state.notes];

        const res = await axios.post('/posts', note)
        const newNote = res.data;

        notes.push(newNote);
        this.setState({notes});
    }

    async addCategory (category) {
        await axios.post('/categories', category)
            .then((response) => {
                const newCategory = response.data;

                const categories = [...this.state.categories, newCategory];
                this.setState({categories});

                this.toggleAddCategoryModal();
            })
            .catch((error) => {
                console.error('Błąd podczas dodawania kategorii:', error);
            });
    }

    async editNote (note) {
        await axios.put(`/posts/` + note._id, note);

        const notes = [...this.state.notes];
        const index = notes.findIndex(x => x._id === note._id);
        if (index >= 0) {
            notes[index] = note;
            this.setState({notes});
        }
        this.toggleModal();
    }

    toggleModal () {
        this.setState({showEditModal: !this.state.showEditModal});
    }

    editNoteHandler (note) {
        this.toggleModal();
        this.setState({editNote: note});
    }

    toggleAddCategoryModal () {
        this.setState({showAddCategoryModal: !this.state.showAddCategoryModal});
    }


    render () {
        const reversedNotes = [...this.state.notes].reverse();
        return (
            <div>
                <AnimatedElement className={`animated-element animated-element-delay-300ms`}>
                    <Box className={`ButtonContainer PositionModalButton`}>
                        <NewPost
                            onAdd={(note) => this.addNote(note)}
                        />
                        <AddCategory
                            addCategory={category => this.addCategory(category)}
                        />
                    </Box>
                </AnimatedElement>

                <EditPostModal
                    isOpen={this.state.showEditModal}
                    editNote={this.state.editNote}
                    toggleModal={() => this.toggleModal()}
                    editNoteHandler={(note) => this.editNote(note)}
                    categories={this.state.categories}
                />

                {reversedNotes.map(note => (
                    <Posts
                        key={note._id}
                        title={note.title}
                        body={note.body}
                        category={note.category}
                        id={note._id}
                        categories={this.state.categories}
                        onEdit={(note) => this.editNoteHandler(note)}
                        onDelete={(id) => this.deleteNote(id)}
                    />
                ))}
            </div>
        );
    }
}

export default ContentAdmin;
