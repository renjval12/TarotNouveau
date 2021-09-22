import React from "react";
import { Form, FloatingLabel } from "react-bootstrap";
import Button from "@restart/ui/esm/Button";

export default function Contact() {
    return (
        
            <div id="contact">
                <form id="contact-form" action="https://formsubmit.co/30d22697b7647ac28e0f3b35c0a7b555" method="POST">
                    <h1>Contact</h1>
                    <FloatingLabel controlId="floatingName" label="Name">
                        <Form.Control type="text" placeholder="Name" />
                    </FloatingLabel>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Email address"
                        className="mb-3"
                        required
                    >
                        <Form.Control type="email" placeholder="name@example.com" />
                    </FloatingLabel>

                    <FloatingLabel controlId="floatingTextarea2" label="Comments">
                        <Form.Control
                            as="textarea"
                            placeholder="Leave a comment here"
                            style={{ height: '100px' }}
                            id="form-el"
                        />
                    </FloatingLabel>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </form>
            </div>
     
    )

}