import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const ProfilePage = () => {
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        number: '',
        numcode: ''
    });

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const email = queryParams.get('email');

    useEffect(() => {
        const storedUserData = localStorage.getItem('userData');
        if (storedUserData) {
            setUserData(JSON.parse(storedUserData));
        } else if (email) {
            fetchUserData(email);
        }
    }, [email]);

    const fetchUserData = (email) => {
        axios.get(`http://localhost:7000/api/user-profile/${email}`)
            .then(response => {
                const userDataFromServer = response.data;
                setUserData(userDataFromServer);
                // Store the user data in local storage
                localStorage.setItem('userData', JSON.stringify(userDataFromServer));
            })
            .catch(error => {
                console.error('Error fetching user data:', error);
            });
    };

    return (
        <Container>
            <Row className="mt-5">
                <Col>
                    <h2>Profile Information</h2>
                </Col>
            </Row>
            <Row className="justify-content-end mt-3">
                <Col xs="auto">
                    <Button variant="outline-primary">Info</Button>
                </Col>
            </Row>
            <Row className="mt-3">
                <Col>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <p>{userData.name}</p>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <p>{userData.email}</p>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="address" className="form-label">Numcode</label>
                            <p>{userData.numcode}</p>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
                            <p>{userData.number}</p>
                        </div>
                    </form>
                </Col>
            </Row>
        </Container>
    );
};

export default ProfilePage;
