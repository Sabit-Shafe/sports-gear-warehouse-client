import React from 'react';
import { Button, Form } from 'react-bootstrap';

const Newsletter = () => {
    return (
        <div>
            <h1 className="text-center text-info">join our newsletter</h1>
            <div className="container mx-auto w-50" >
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                </Form>
            </div>
            <Button className="mx-auto d-block mb-5" variant="primary" type="submit">
                Subcribe
            </Button>
        </div>
    );
};

export default Newsletter;