import React from 'react'
import { Modal, Button} from "react-bootstrap";

const EditConfirmation = ({ showModal, hideModal, confirmModal, message }) => {
    return (
        <Modal show={showModal} onHide={hideModal}>
        <Modal.Header>
          <Modal.Title>Confirmation de la modification</Modal.Title>
        </Modal.Header>
        <Modal.Body><div className="alert alert-warning">{message}</div></Modal.Body>
        <Modal.Footer>
          <Button variant="default" onClick={hideModal}>
            Annuler
          </Button>
          <Button variant="warning" onClick={() => confirmModal() }>
            Modifier
          </Button>
        </Modal.Footer>
      </Modal>
    )
}

export default EditConfirmation;