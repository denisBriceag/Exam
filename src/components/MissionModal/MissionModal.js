import React from "react";
import { Modal, Button } from 'react-bootstrap';
import './MissionModal.css';

const MissionModal = (props) => {
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
                        МИССИЯ КОМПАНИИ
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <strong><h4 style={{ fontWeight: 'bold', textAlign: 'center', marginBottom: '20px' }}>Импорт напитков высочайшего качества и мировых брендов для настоящих ценителей</h4></strong>
                    <p>
                        Деятельность компании полностью соответствует поставленной миссии. Это подтверждается нашим сотрудничеством с мировыми брендами продукция которых обладает всеми основополагающими атрибутами: высокое качество, богатая история, отличный дизайн, грамотно спланированный ассортимент. В результате наши успехи выражаются через постоянное увеличение доли рынка, оборота и ассортимента продукции и высокой узнаваемости брендов представленных на рынке Молдовы.
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div >
    )

}

export default MissionModal;