import React from "react";
import '../../styles_components/style_content.scss';
import Note from "./Note";
import NewPost from "./AddPost/NewPost";
import Modal from "react-modal";
import EditNote from "./EditPost/EditNote";
import axios from "../../../axios";

class Content extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notes: [],

            editNote: {},
            showEditModal: false
        }
    }

    componentDidMount() {
        this.fetchNotes();
    }

    async fetchNotes() {
        const res = await axios.get('/posts');
        const notes = res.data;
        this.setState({ notes });
    }

    async deleteNote(id) {
        const notes = [...this.state.notes]
            .filter(note => note._id !== id);

        await axios.delete(`/posts/` + id);
        this.setState({ notes });
    }

    async addNote(note) {
        const notes = [...this.state.notes];

        // add to backend
        const res = await axios.post('/posts', note)
        const newNote = res.data;

        // add to frontend
        notes.push(newNote);
        this.setState({notes});
    }

     async editNote(note) {
        // edit backend
        await axios.put(`/posts/` + note._id, note);

        // edit frontend
        const notes = [...this.state.notes];
        const index = notes.findIndex(x => x._id === note._id);
        if (index >= 0) {
            notes[index] = note;
            this.setState({notes});
        }
        this.toggleModal();
    }

    toggleModal() {
        this.setState({showEditModal: !this.state.showEditModal});
    }

    editNoteHandler(note) {
        this.toggleModal();
        this.setState({ editNote: note });
    }

    render() {
        return (
            <div>

                <NewPost
                    onAdd={(note) => this.addNote(note)}
                />

                <Modal
                    isOpen={this.state.showEditModal}
                    contentLabel={'Edytuj notatkę'}
                >
                    <EditNote
                        title={this.state.editNote.title}
                        body={this.state.editNote.body}
                        id={this.state.editNote._id}
                        onEdit={note => this.editNote(note)}
                    />
                    <button
                        onClick={() => this.toggleModal()}
                    >
                        Anuluj
                    </button>
                </Modal>

                {this.state.notes.map(note => (
                    <Note
                        key={note._id}
                        title={note.title}
                        body={note.body}
                        id={note._id}
                        onEdit={(note) => this.editNoteHandler(note)}
                        onDelete={(id) => this.deleteNote(id)}
                    />
                ))}
            </div>
        );
    }
}

export default Content;