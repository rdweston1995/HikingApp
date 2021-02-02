//Node Imports
import React from "react";
import Modal from "react-bootstrap/Modal";

//CSS
import "./imageModal.css";

function imageModal(props) {
    return(
        <Modal show={props.show} onHide={props.onClose} animation={false}>
            <img src={props.image} alt="Big picture of hike" />
        </Modal>
    );
}

export default imageModal;