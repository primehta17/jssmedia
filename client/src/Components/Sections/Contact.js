import React, { useState } from 'react';
import axios from "axios";
import { Container, Row, Col, FloatingLabel, Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import countryCodes from '../Data/CountryCodes';

export default function Contact() {

  const [inputs, setInputs] = useState({
    tag: 'Need-Help',
    username: '',
    product: '',
    email: '',
    number: '',
    numcode: '',
    account: '',
  });

  const [message, setMessage] = useState('');
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }));
  }
  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post('http://localhost:7000/api/submit-modal', inputs).then(function (response) {
      console.log(response.data);
      if (response.status === 200) {
        setInputs({ tag: '', product: '', username: '', email: '', number: '', numcode: '' });
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
    <div id='contact' className='section-area Contact-area pb-100'>
      <Container>
        <div className="section-content text-center">
          <h2>
            <span>Need help</span> with our services ?
          </h2>
        </div>
        <div className='contact-section'>
          <Row className='contact-section-container'>
            <Col className='contact-section-content text-center'>
              <h3>Unleash the Power of Creativity with JSS Media.</h3>
              <Form onSubmit={handleSubmit}>
                <Row className='contact-form'>
                  <Col lg={6}>
                    <FloatingLabel className="mb-3" controlId="floatingInput" label="Full Name">
                      <Form.Control type="text" className="form-control" value={inputs.username} name="username" placeholder="Full name" onChange={handleChange} required />
                    </FloatingLabel>
                  </Col>

                  <Col lg={6}>
                    <FloatingLabel className="mb-3" controlId="floatingInput" label="Email Address">
                      <Form.Control type="email" className="form-control" value={inputs.email} name="email" onChange={handleChange} placeholder="Enter email" required />
                    </FloatingLabel>
                  </Col>

                  <Col lg={6}>
                    <div className="number-field">
                      <FloatingLabel className="mb-3 select-country-code" controlId="floatingInput" label="Select">
                        <Form.Select aria-label="Floating label select" name="numcode" value={inputs.numcode} onChange={handleChange} required>
                          {countryCodes.map((country) => (
                            <option key={country.code} value={country.code}>
                              {`${country.label} (${country.code})`}
                            </option>
                          ))}
                        </Form.Select>
                      </FloatingLabel>
                      <FloatingLabel className="wp-number mb-3" controlId="floatingInput" label="Contact Number">
                        {/* <Form.Control type="text" value={inputs.number} placeholder="Whatsapp number" name="number" title="10 valid numeric characters only" pattern="^(?:[+]6|\\+65)?[05](([0-9]{2}((\s[0-9]{3,4}\s[0-9]{4})|(-[0-9]{3,4}\s[0-9]{4})|(-[0-9]{7,8})))|([0-9]{9,10}))$" onChange={handleChange} required /> */}
                        <Form.Control type="text" pattern="\d{9,10}" maxLength={12} title="Please enter valid number."
                          value={inputs.number} placeholder="Whatsapp number" name="number" onChange={handleChange} required />
                      </FloatingLabel>
                    </div>
                  </Col>
                  <Col lg={6}>

                    <FloatingLabel className="mb-3" controlId="floatingSelect" label="Service Interested">
                      <Form.Select aria-label="Floating label select" name="product" value={inputs.product} onChange={handleChange} required>
                        <option value="">Select</option>
                        <option value="VIDEO">VIDEO</option>
                        <option value="PHOTOE">PHOTO</option>
                        <option value="CUSTOMIZED">CUSTOMIZED</option>
                      </Form.Select>
                    </FloatingLabel>
                  </Col>
                  {message && <p className="h6 text-success text-center"><br />{message}</p>}
                  <Col className='text-center get-started-btn'>
                    <Button type="submit" size="lg">Get Started</Button>
                  </Col>
                </Row>
              </Form>
              <Col className='contact-link-section'>
                <p>Or Call Us @ <Link> +601161987769</Link></p>
              </Col>

            </Col>
            {/* <Col className='contact-chart-section' lg={6}>
            <div className='apex-chart'>
              <ApexChart />
            </div>
          </Col> */}
          </Row>
        </div>
      </Container>
    </div>
  )
}
