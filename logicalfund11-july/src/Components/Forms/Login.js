import React, { useState, useEffect } from 'react';
import { Col, Row, Form, Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Avatar from "../Items/Avatar";
import { NavDropdown } from 'react-bootstrap';
import { FaRegUserCircle } from "react-icons/fa";

export default function Login() {
  const [loginFormData, setLoginFormData] = useState({
    email: '',
    password: ''
  });
  const [message, setMessage] = useState('');
  const [show, setShow] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false); // Track login status
  const [email, setEmail] = useState(''); // Store email/email
  const navigate = useNavigate(); // Initialize useHistory

  useEffect(() => {
    // Check if email is already logged in from previous session
    const loggedInEmail = localStorage.getItem('loggedInEmail');
    const email = localStorage.getItem('email');
    if (loggedInEmail && email) {
      setLoggedIn(true);
      setEmail(email);
    }
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setLoginFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleLoginSubmit = (event) => {
    event.preventDefault();

    axios.post('http://localhost:7000/api/submit-login', loginFormData)
      .then(response => {
        if (response.status === 200) {
          // Clear form data
          setLoginFormData({
            email: '',
            password: ''
          });
          // Handle successful login
          setMessage('Login successful');
          navigate('/');
          setLoggedIn(true); // Update login status
          setShow(false);
          setEmail(loginFormData.email); // Store email/email in state
          // Store login status and email in localStorage
          localStorage.setItem('loggedInEmail', true);
          localStorage.setItem('email', loginFormData.email);
        } else {
          setMessage('Login failed, please try again!');
        }
      })
      .catch(error => {
        console.error('Error:', error);
        setMessage('Login failed, please try again!');
      });
  };

  const handleLogout = () => {
    // Clear email data and update login status
    setLoggedIn(false);
    setEmail('');
    navigate('/');
    setMessage('Logged out successfully');
    // Clear login status and email from localStorage
    localStorage.removeItem('loggedInEmail');
    localStorage.removeItem('email');
  };

  return (
    <div>
      {loggedIn ? (
        <div className="d-flex align-items-center">
          <div className="mr-2">
            <div className="avatar-circle" style={{ fontSize: '24px' }}><FaRegUserCircle />
            </div>
          </div>
          <NavDropdown title={<span>{email}</span>} id="avatar-dropdown">
            <NavDropdown.Item as={Link} to={`/profile?email=${email}`}>Profile</NavDropdown.Item>
            <NavDropdown.Item>History</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item><Button onClick={handleLogout}>Sign Out</Button></NavDropdown.Item>
          </NavDropdown>
        </div>
      ) : (
        <Link onClick={() => setShow(true)} className="nav-logIn">Login</Link>
      )}
      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleLoginSubmit}>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Email:</Form.Label>
              <Form.Control type="text" className="form-control" value={loginFormData.email} name="email" placeholder="Email" onChange={handleChange} required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPassword">
              <Form.Label>Password:</Form.Label>
              <Form.Control type="password" className="form-control" value={loginFormData.password} name="password" onChange={handleChange} placeholder="Enter password" required />
            </Form.Group>
            <p className='h6'>New to Us??
              <Link to={'/signup'} onClick={() => setShow(false)}>Signup</Link>
              <br />
              <Link to={'/forgot-password'} onClick={() => setShow(false)}>Forgot Password</Link>
            </p>
            {message && <p className="h6 text-success text-center">{message}</p>}
            <div className='product-submit-btn row px-2'>
              <Button type="submit" className='gradient-btn'>Submit</Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  )
}
