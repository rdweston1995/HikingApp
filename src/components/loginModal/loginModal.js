//Node Imports
import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

//CSS
import "./loginModal.css";

function loginModal() {
    // const [show, setShow] = useState(false);
    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);
    return (
        <>
            <Modal >
                <Modal.Header closeButton>
                    Modal Heading
                </Modal.Header>
                <Modal.Body>Modal Body</Modal.Body>
                <Modal.Footer>
                    <Button varient="secondary" >Close</Button>
                    <Button varient="primary" >Submit</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default loginModal;