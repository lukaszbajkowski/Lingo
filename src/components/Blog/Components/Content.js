import AnimatedElement from "../../Animation/AnimatedElementOnce";
import React from "react";
import {Grid, Typography} from "@mui/material";
import '../../styles_components/style_content.scss';
import {Link as RouterLink} from "react-router-dom";
import Button from "@mui/material/Button";
import Note from "./Note";
import NewNote from "./NewNote";
import Modal from "react-modal";
import EditNote from "./EditNote";
import axios from "axios";

class Content extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notes: [
                {
                    id: '2323',
                    title: 'Podzielić ten kod na elementy tak jak jest to zrobione na laptopie. Chyba trzeba to zrobić' +
                        'tylko z notatką. Na sam koniec spróbować ze zmiana nazw zmiennych',
                    body: 'I tyle, bo po co więcej'
                },
                {
                    id: '1212',
                    title: 'Nakarmić kota',
                    body: 'Podrobami chyba najlepiej'
                }
            ],

            editNote: {},
            showEditModal: false
        }
    }

    componentDidMount() {
        this.fetchNotes();
    }

    async fetchNotes() {
        const res = await axios.get('http://localhost:3001/api/posts');
        console.log(res);
    }

    deleteNote(id) {
        console.log('usuwanie notatki', id)
        const notes = [...this.state.notes]
            .filter(note => note.id !== id);
        this.setState({ notes });
    }

    addNote(note) {
        const notes = [...this.state.notes];
        notes.push(note);
        console.log(note.id);
        this.setState({notes});
    }

    editNote(note) {
        const notes = [...this.state.notes];
        const index = notes.findIndex(x => x.id === note.id);
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
                <NewNote
                    onAdd={(note) => this.addNote(note)}
                />

                <Modal
                    isOpen={this.state.showEditModal}
                    contentLabel={'Edytuj notatkę'}
                >
                    <EditNote
                        title={this.state.editNote.title}
                        body={this.state.editNote.body}
                        id={this.state.editNote.id}
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
                        key={note.id}
                        title={note.title}
                        body={note.body}
                        id={note.id}
                        onEdit={(note) => this.editNoteHandler(note)}
                        onDelete={(id) => this.deleteNote(id)}
                    />
                ))}
            </div>
        );
    }
}

export default Content;