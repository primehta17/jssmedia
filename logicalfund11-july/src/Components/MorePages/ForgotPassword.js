import React, { useState } from 'react';
import { Container, Row, Col, Button, Form, Alert } from 'react-bootstrap';
import axios from 'axios';

const ForgotPassword = () => {
    const [formData, setFormData] = useState({
        email: '', // Initialize with empty string
        newPassword: '',
        confirmPassword: ''
    });
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Add validation checks here, e.g., password match
        if (formData.newPassword !== formData.confirmPassword) {
            setErrorMessage("Passwords don't match");
            return;
        }
        try {
            const response = await axios.post('http://localhost:7000/api/forgot-password', formData);
            // Handle success
            setSuccessMessage(response.data.message);
            setErrorMessage('');
            // Clear form fields
            setFormData({
                email: '',
                newPassword: '',
                confirmPassword: ''
            });
        } catch (error) {
            // Handle error
            console.error('Error resetting password:', error.response);
            if (error.response && error.response.data && error.response.data.error) {
                setErrorMessage(error.response.data.error);
            } else {
                setErrorMessage('Error resetting password. Please try again.');
            }
            setSuccessMessage('');
        }
    };


    return (
        <Container>
            <Row className="mt-5">
                <Col>
                    <h2>Forgot Password</h2>
                </Col>
            </Row>
            <Row className="justify-content-end mt-3">
                <Col xs="auto">
                    <Button variant="outline-primary" > Forgot Password</Button>
                    {/* <Link to="/forgot-password">Forgot Password</Link> */}
                </Col>
            </Row>
            <Row className="mt-3">
                <Col>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" name="email" value={formData.email} onChange={handleChange} required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>New Password</Form.Label>
                            <Form.Control type="password" placeholder="New Password" name="newPassword" value={formData.newPassword} onChange={handleChange} required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type="password" placeholder="Confirm Password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
                        </Form.Group>

                        {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
                        {successMessage && <Alert variant="success">{successMessage}</Alert>}

                        <Button variant="primary" type="submit">
                            Reset Password
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default ForgotPassword;
