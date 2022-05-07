import React from 'react';
import { Button, Form } from 'react-bootstrap';

const Newsletter = () => {
    return (
        <div style={{backgroundColor: 'beige'}}>
            <h1 className="text-center text-info mt-5">join our newsletter</h1>
            <div className="container mx-auto w-50" >
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label></Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted text-center">
                        To get the latest news from us please subscribe your email
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