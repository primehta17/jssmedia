import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Col, Row, Form, Button, Container, FloatingLabel } from 'react-bootstrap';
import { FaAngellist } from "react-icons/fa";
import axios from "axios";
import countryCodes from './Components/Data/CountryCodes';

const Signup = () => {
    const [signupFormData, setSignupFormData] = useState({
        username: '',
        email: '',
        number: '',
        numcode: '',
        password: '',
        confirmPassword: '',
    });

    const [message, setMessage] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate(); // Initialize useHistory

    const handleChange = (event) => {
        const { name, value } = event.target;
        setSignupFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (signupFormData.password !== signupFormData.confirmPassword) {
            setPasswordError('Passwords do not match');
            return;
        }

        axios.post('http://localhost:7000/api/submit-signup', signupFormData)
            .then(response => {
                if (response.status === 200) {
                    setSignupFormData({
                        username: '',
                        email: '',
                        number: '',
                        numcode: '',
                        password: '',
                        confirmPassword: ''
                    });
                    setMessage('Thank you');
                    localStorage.setItem('loggedInEmail', true);
                    localStorage.setItem('email', signupFormData.email);

                    setTimeout(() => {
                        setMessage('');
                        navigate('/');
                    }, 2000);
                } else {
                    setMessage('Submit failed, please try again!');
                }
            })
            .catch(error => {
                console.error('Error:', error.response);
                if (error.response && error.response.status === 400) {
                    setError('Email or number already exists');
                } else {
                    setError('Submit failed, please try again!');
                }
            });
    };


    return (
        <div id='signup' className='Contact-area pb-100'>
            <Container>
                <div className="section-content text-center m-3">
                    <h4>Welcome <FaAngellist /></h4>
                    <h2><span>Register Here</span></h2>
                </div>
                <div className='contact-section'>
                    <Row className='contact-section-container'>
                        <Col className='contact-section-content text-center'>
                            <Form onSubmit={handleSubmit}>
                                <Row className='contact-form'>
                                    <Col lg={12}>
                                        <FloatingLabel className="mb-3" controlId="name" label="Full Name">
                                            <Form.Control type="text" value={signupFormData.username} name="username" placeholder="Full name" onChange={handleChange} required />
                                        </FloatingLabel>
                                    </Col>
                                    <Col lg={12}>
                                        <div className="number-field">
                                            <FloatingLabel className="mb-3 select-country-code" controlId="numcode" label="Select">
                                                <Form.Select aria-label="Country code" name="numcode" value={signupFormData.numcode} onChange={handleChange} required>
                                                    {countryCodes.map((country) => (
                                                        <option key={country.code} value={country.code}>
                                                            {`${country.label} (${country.code})`}
                                                        </option>
                                                    ))}
                                                </Form.Select>
                                            </FloatingLabel>
                                            <FloatingLabel className="wp-number mb-3" controlId="number" label="Contact Number">
                                                <Form.Control type="text" maxLength={12} pattern="\d{9,10}" title="Please enter a valid number" value={signupFormData.number} placeholder="Whatsapp number" name="number" onChange={handleChange} required />
                                            </FloatingLabel>
                                        </div>
                                    </Col>
                                    <Col lg={12}>
                                        <FloatingLabel className="mb-3" controlId="email" label="Email">
                                            <Form.Control type="email" value={signupFormData.email} name="email" placeholder="Email" onChange={handleChange} required />
                                        </FloatingLabel>
                                    </Col>
                                    <Col lg={6}>
                                        <FloatingLabel className="mb-3" controlId="password" label="Password">
                                            <Form.Control type="password" value={signupFormData.password} name="password" onChange={handleChange} placeholder="Enter password" required />
                                        </FloatingLabel>
                                    </Col>
                                    <Col lg={6}>
                                        <FloatingLabel className="mb-3" controlId="confirmPassword" label="Confirm password">
                                            <Form.Control type="password" value={signupFormData.confirmPassword} name="confirmPassword" onChange={handleChange} placeholder="Confirm password" required />
                                        </FloatingLabel>
                                    </Col>
                                    {passwordError && <p className="h6 text-danger text-center">{passwordError}</p>}
                                    {error && <p className="h6 text-danger text-center">{error}</p>}
                                    {message && <p className="h6 text-success text-center">{message}</p>}
                                    <Col className='text-center get-started-btn'>
                                        <Button type="submit" size="lg">Signup</Button>
                                    </Col>
                                </Row>
                            </Form>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default Signup;
