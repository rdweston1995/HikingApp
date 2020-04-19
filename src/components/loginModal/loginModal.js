//Node Imports
import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

//CSS
import "./loginModal.css";

function loginModal(props) {
    return (
        <>
            <Modal show={props.show} onHide={props.onClose} animation={false}>
                <Modal.Header closeButton>
                    Modal Heading
                </Modal.Header>
                <Modal.Body>Modal Body</Modal.Body>
                <Modal.Footer>
                    <Button varient="secondary" onClick={props.onClose}>Close</Button>
                    <Button varient="primary" onClick={props.onClose}>Submit</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default loginModal;