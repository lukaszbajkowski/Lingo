import React from "react";
import AddCategoryModal from "./AddCategoryModal";
import Button from "@mui/material/Button";

class AddCategory extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            showAddCategoryModal: false,
        };
    }

    toggleAddCategoryModal () {
        this.setState({showAddCategoryModal: !this.state.showAddCategoryModal});
    }

    render () {
        return (
            <div>
                <Button onClick={() => this.toggleAddCategoryModal()}>
                    Dodaj kategorię
                </Button>

                <AddCategoryModal
                    isOpen={this.state.showAddCategoryModal}
                    toggleModal={() => this.toggleAddCategoryModal()}
                    addCategory={this.props.addCategory}
                />
            </div>
        );
    }
}

export default AddCategory;
