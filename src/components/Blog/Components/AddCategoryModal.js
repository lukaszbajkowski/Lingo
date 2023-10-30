import React, {useState} from "react";
import Modal from "react-bootstrap/Modal";

const AddCategoryModal = ({isOpen, toggleModal, addCategory}) => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");

    const handleAddCategory = () => {
        const newCategory = {
            name: name,
            description: description,
        };

        addCategory(newCategory);
        setName("");
        setDescription("");
        toggleModal();
    };

    return (
        <Modal show={isOpen} onHide={toggleModal}>
            <Modal.Header closeButton>
                <Modal.Title>Dodaj nową kategorię</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form>
                    <div className="form-group">
                        <label>Nazwa kategorii:</label>
                        <input
                            type="text"
                            className="form-control"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label>Opis kategorii:</label>
                        <textarea
                            className="form-control"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        ></textarea>
                    </div>
                </form>
            </Modal.Body>
            <Modal.Footer>
                <button className="btn btn-secondary" onClick={toggleModal}>
                    Anuluj
                </button>
                <button className="btn btn-primary" onClick={handleAddCategory}>
                    Dodaj kategorię
                </button>
            </Modal.Footer>
        </Modal>
    );
};

export default AddCategoryModal;
