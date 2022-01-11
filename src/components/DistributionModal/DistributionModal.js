import React from "react";
import { Modal, Button } from "react-bootstrap";

const DistributionModal = (props) => {
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
                        ДИСТРИБУЦИЯ
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <strong><h4 style={{ fontWeight: 'bold', textAlign: 'center', marginBottom: '20px' }}>Импорт напитков высочайшего качества и мировых брендов для настоящих ценителей</h4></strong>
                    <p>
                        Компания <strong>“UB FB TRADE GROUP”</strong> является официальным импортёром и дистрибьютором премиальной алкогольной и безалкогольной продукции на рынке Молдовы. Мы осуществляем бесплатную доставку по Кишинёву. В регионах доставка нашей продукции реализуется нашими субдистрибьюторами.
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div >
    )
}

export default DistributionModal;