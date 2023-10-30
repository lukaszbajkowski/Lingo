import React from "react";
import '../../styles_components/style_content.scss';
import Note from "./Note";
import NewPost from "./AddPost/NewPost";
import axios from "../../../axios";
import EditPostModal from "./EditPost/EditPostModal";
import AddCategoryModal from "./AddCategoryModal";

class Content extends React.Component {
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

        // add to backend
        const res = await axios.post('/posts', note)
        const newNote = res.data;

        // add to frontend
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
        return (
            <div>
                <NewPost
                    onAdd={(note) => this.addNote(note)}
                />

                <EditPostModal
                    isOpen={this.state.showEditModal}
                    editNote={this.state.editNote}
                    toggleModal={() => this.toggleModal()}
                    editNoteHandler={(note) => this.editNote(note)}
                />

                <button onClick={() => this.toggleAddCategoryModal()}>Dodaj kategorię</button>
                <AddCategoryModal
                    isOpen={this.state.showAddCategoryModal}
                    toggleModal={() => this.toggleAddCategoryModal()}
                    addCategory={(category) => this.addCategory(category)}
                />

                {this.state.notes.map(note => (
                    <Note
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

export default Content;
