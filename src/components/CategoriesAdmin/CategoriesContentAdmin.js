import React from "react";
import '../styles_components/style_content.scss';
import axios from "../../axios";
import {Container, Grid} from "@mui/material";
import SingleAdminCategory from "./SingleAdminCategory";
import EditCategoryModal from "./Components/EditCategory/EditCategoryModal";

class CategoriesContentUser extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            notes: [],
            categories: [],
            editCategory: {},
            showEditModal: false,
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

    async deleteCategory (id) {
        const categories = [...this.state.categories]
            .filter(category => category._id !== id);

        await axios.delete(`/category/` + id);
        this.setState({categories});
    }

    async editCategory (category) {
        await axios.put('/category/' + category._id, category);

        const categories = [...this.state.categories];
        const index = categories.findIndex(cat => cat._id === category._id);
        if (index >= 0) {
            categories[index] = category;
            this.setState({categories});
        }
        this.toggleModal();
    }

    toggleModal () {
        this.setState({showEditModal: !this.state.showEditModal});
    }

    editCategoryHandler (note) {
        this.toggleModal();
        this.setState({editCategory: note});
    }

    render () {
        const reversedCategories = [...this.state.categories].reverse();

        return (
            <Container>
                <Grid
                    container
                    columnSpacing={{xs: 2, sm: 6, md: 6}}
                    rowSpacing={{xs: 4, sm: 6, md: 6}}
                    className="PositionCategories"
                >
                    <EditCategoryModal
                        isOpen={this.state.showEditModal}
                        editCategory={this.state.editCategory}
                        toggleModal={() => this.toggleModal()}
                        editCategoryHandler={(category) => this.editCategory(category)}
                    />

                    {reversedCategories.map((category) => (
                        <SingleAdminCategory
                            key={category._id}
                            id={category._id}
                            name={category.name}
                            description={category.description}
                            shortdesc={category.shortdesc}
                            icon={category.icon}
                            color={category.color}
                            iconColor={category.iconColor}
                            className={`SingleCategory`}
                            onEdit={(category) => this.editCategoryHandler(category)}
                            onDelete={(id) => this.deleteCategory(id)}
                        />
                    ))}
                </Grid>
            </Container>
        );
    }
}

export default CategoriesContentUser;
