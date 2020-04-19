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
                    Login
                </Modal.Header>
                <Modal.Body>
                    <p>Email:</p>
                    <InputGroup>
                        <FormControl type="text" aria-describedby="basic-addon2" id="loginEmail" />
                    </InputGroup>
                    <p>Password:</p>
                    <InputGroup>
                        <FormControl type="text" aria-describedby="basic-addon2" id="loginPassword" />
                    </InputGroup>
                </Modal.Body>
                <Modal.Footer>
                    {/* <Button varient="secondary" onClick={props.onClose}>Close</Button> */}
                    <Button varient="primary" onClick={props.onSubmit}>Login</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default loginModal;