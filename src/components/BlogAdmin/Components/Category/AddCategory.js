import React from "react";
import AddCategoryModal from "./AddCategoryModal";
import OpenAddCategoryButton from "../AddSection/OpenAddCategoryButton";

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
            <div style={{display: `contents`}}>
                <OpenAddCategoryButton
                    onClick={() => this.toggleAddCategoryModal()}
                />

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
