import React from "react";
import { Modal, Button } from 'react-bootstrap';

const PartnersModal = (props) => {
    return (
        <div className="main-container">
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                className="main-modal"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        ПАРТНЁРЫ
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>
                        Наша компания сотрудничает с международными компаниями, бренды которых обладают мировой известностью, богатой историей и несомненным качеством. Ниже представлены бренды некоторых наших партнёров:
                    </p>
                    <figure>
                        <img src="https://ubfb.md/wp-content/uploads/2015/07/parteneri1.jpg" alt="brand-lgos" />
                    </figure>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div >
    )
}

export default PartnersModal;