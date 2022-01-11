import React, { useEffect, useState } from "react";
import { Form, Button } from 'react-bootstrap';
import './ContactUs.css';
import uuid from 'react-uuid';

const ContactUs = ({ addInfo }) => {
    const [mail, setMail] = useState('');
    const [name, setName] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        // addInfo(mail, name);
        console.log('fdg');
        setMail('');
        setName('');
    };

    useEffect(() => {
        localStorage.setItem(uuid(), JSON.stringify(mail))
    }, [mail]);


    return (
        <Form className="main-form" onSubmit={handleSubmit}>
            <Form.Label id='main-label'>Свяжитесь с нами!</Form.Label>

            <Form.Group className="mb-3" controlId="formBasicEmail">

                <Form.Label>Адрес электронной почты</Form.Label>
                <Form.Control type="email" placeholder="Введите email" value={mail} onChange={(e) => setMail(e.target.value)} />
                <Form.Text className="text-muted">
                    Мы никогда не поделимся вашей электронной почтой с кем-либо еще.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Имя</Form.Label>
                <Form.Control placeholder="Имя" value={name} onChange={(e) => setName(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Запомнить меня" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Подтвердить
            </Button>
        </Form>
    );
}

export default ContactUs;