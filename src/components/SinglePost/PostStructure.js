import React from "react";
import '../styles_components/style_content.scss';
import PostContent from "./PostContent";
import axios from "../../axios";

class PostStructure extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            categories: [],
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
            <PostContent
                title={this.props.post.title}
                body={this.props.post.body}
                createdAt={this.props.post.createdAt}
                category={this.props.post.category}
                categories={this.state.categories}
            />
        );
    }
}

export default PostStructure;