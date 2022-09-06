import React from 'react'
import { Modal, Button} from "react-bootstrap";

const AddConfirmation = ({ showModal, hideModal, confirmModal, message }) => {
    return (
        <Modal show={showModal} onHide={hideModal}>
        <Modal.Header>
          <Modal.Title>Confirmation de l'ajout</Modal.Title>
        </Modal.Header>
        <Modal.Body><div className="alert alert-info">{message}</div></Modal.Body>
        <Modal.Footer>
          <Button variant="default" onClick={hideModal}>
            Annuler
          </Button>
          <Button variant="info" onClick={() => confirmModal() }>
            Ajouter
          </Button>
        </Modal.Footer>
      </Modal>
    )
}

export default AddConfirmation;