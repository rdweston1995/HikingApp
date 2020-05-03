//Node Imports
import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

//CSS
import "./accountSignUpModal.css";

function accountSignUp(props) {
    return (
        <>
            <Modal show={props.show} onHide={props.onClose} animation={false}>
                <Modal.Header closeButton>Sign Up</Modal.Header>
                <Modal.Body>
                    <p></p>
                    <InputGroup>
                        <FormControl type="text" aria-describedby="basic-addon2" id="" />
                    </InputGroup>
                </Modal.Body>
                <Modal.Footer>
                    <Button varient="primary" onClick={props.onSubmit}>Submit</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default accountSignUp;