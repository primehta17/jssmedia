import React, { useState } from 'react';
import { Form, Button, } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';
import axios from "axios";
import countryCodes from '../Data/CountryCodes';



export default function ContactUsPopup() {
  const [show, setShow] = useState(false);

  const [inputs, setInputs] = useState({
    tag: 'Contact',
    username: '',
    product: '',
    email: '',
    number: '',
    account: '',
    numcode: '',
  });

  const [message, setMessage] = useState('');
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }));
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:7000/api/submit-form', inputs).then(function (response) {
      console.log(response.data);
      if (response.status === 200) {
        setInputs({ tag: '', username: '', email: '', number: '', numcode: '' });
        setMessage('Thank you');
        setTimeout(() => {
          setMessage(false);
        }, 600000);
      }
      else { setMessage('Submit failed please try again!'); }
    })
      .then(function (response) {
        console.log(response.data + "second");
      })
      .catch(function (error) {
      });
  }

  return (
    <div>
      <Link onClick={() => setShow(true)} className='nav-logIn'>Contact</Link>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formGroupName">
              <Form.Label>Name:</Form.Label>
              <Form.Control type="text" className="form-control" value={inputs.username} name="username" placeholder="Full name" onChange={handleChange} required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Email:</Form.Label>
              <Form.Control type="email" className="form-control" value={inputs.email} name="email" onChange={handleChange} placeholder="Enter email" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>Contact Number:</Form.Label>
              <div className="number-field">
                <Form.Select className='select-country-code form-control' name="numcode" value={inputs.numcode} onChange={handleChange} aria-label="Default select example" required>
                  {countryCodes.map((country, index) => (
                    <option key={index} value={country.code}>
                      {`${country.label} (${country.code})`}
                    </option>
                  ))}
                </Form.Select>

                <Form.Control
                  type="text" className="wp-number form-control" maxLength={12} pattern="\d{9,12}" title="Please enter valid number."
                  value={inputs.number} placeholder="Whatsapp number" name="number" onChange={handleChange} required />
              </div>
            </Form.Group>
            {message && <p className="h6 text-success text-center"><br />{message}</p>}
            <div className='product-submit-btn row px-2'>
              <Button type="submit" className='gradient-btn'>Submit</Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  )
}
