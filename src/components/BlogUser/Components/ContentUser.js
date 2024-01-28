import React from "react";
import '../../styles_components/style_content.scss';
import axios from "../../../axios";
import SinglePost from "./SinglePost";
import {Box, Button} from "@mui/material";

class ContentUser extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            notes: [],
            categories: [],
            editNote: {},
            showEditModal: false,
            showAddCategoryModal: false,
            visiblePosts: 2,
        };

        this.loadMorePosts = this.loadMorePosts.bind(this);
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

    loadMorePosts () {
        this.setState((prevState) => ({
            visiblePosts: prevState.visiblePosts + 2,
        }));
    }

    render () {
        const {notes, categories, visiblePosts} = this.state;

        const reversedNotes = [...notes].reverse();

        const postsToDisplay = reversedNotes.slice(0, visiblePosts);

        return (
            <div>
                {postsToDisplay.map((note) => (
                    <SinglePost
                        key={note._id}
                        id={note._id}
                        title={note.title}
                        body={note.body}
                        shortbody={note.shortbody}
                        category={note.category}
                        categories={categories}
                    />
                ))}

                {reversedNotes.length > visiblePosts && (
                    <Box textAlign='center'>
                        <Button
                            variant="contained"
                            color="primary"
                            className={`ShowMoreButton`}
                            onClick={this.loadMorePosts}
                        >
                            Pokaż więcej
                        </Button>
                    </Box>
                )}
            </div>
        );
    }
}

export default ContentUser;
