import React from "react";
import '../../styles_components/style_content.scss';
import axios from "../../../axios";
import SinglePost from "./SinglePost";

class ContentUser extends React.Component {
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

    render () {
        return (
            this.state.notes.map(note => (
                <SinglePost
                    id={note._id}
                    title={note.title}
                    body={note.body}
                    category={note.category}
                    categories={this.state.categories}
                />
            ))
        );
    }
}

export default ContentUser;
