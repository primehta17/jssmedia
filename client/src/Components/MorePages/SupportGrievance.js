import React, { useState, useEffect } from 'react'
import { Container, Row, Col, FloatingLabel, Form, Button } from 'react-bootstrap'
import axios from "axios";
import countryCodes from '../Data/CountryCodes';


export default function SupportGrievance() {

  useEffect(() => {
    document.title = 'Support-Grievance';
    document.getElementsByTagName('meta')["description"].content = "";
  }, []);

  const [inputs, setInputs] = useState({
    tag: 'Support/Grievance',
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
    axios.post('/api/modal.php', inputs).then(function (response) {
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
    <div className='Single-banner-area'>
      <Container>
        <div className='Single-banner-content'>
          <h1>Support Grievance</h1>
        </div>
        <Col className='Single-banner-section'>
          <div className='Single-banner-section-card'>
            <p>The best way to receive support or for all kinds of queries & questions, is to email our support team at info@Logical.com. Emails are promptly answered and can be tracked and accounted for better than phone conversations. If you would rather like to speak someone, you may call one of the numbers below. We encourage you to send an email and then call the support team with your ticket number ready with you.</p>
            <p>Support hours Monday to Friday 9:30 AM to 6:30 PM Singapore Time (GMT+8). <a style={{ textDecoration: 'none' }} href="tel:+601161987769">+601161987769</a></p>
          </div>
        </Col>
        <Col>
          <div className='Support-form-area'>
            <Container>
              <Col className='support-form-content'>
                <h3>Get a free consultation</h3>
                <p>Don’t hestiate to ask us anything, Our customer support team always ready to help you, they will support you 24/7.</p>
                <Form onSubmit={handleSubmit}>
                  <Row className='support-form'>
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
                          <Form.Control type="text" value={inputs.number} placeholder="Whatsapp number" name="number" pattern="\d{9,10}" maxLength={12} title="Please enter valid number." onChange={handleChange} required />
                        </FloatingLabel>
                      </div>
                    </Col>
                    <Col lg={6}>
                      <FloatingLabel className="mb-3" controlId="floatingSelect" label="Product Interested">
                        <Form.Select aria-label="Floating label select" name="product" value={inputs.product} onChange={handleChange} required>
                          <option value="">Select</option>
                          <option value="KLSE">KLSE</option>
                          <option value="FOREX">FOREX</option>
                          <option value="CUSTOMIZED">CUSTOMIZED</option>
                        </Form.Select>
                      </FloatingLabel>
                    </Col>
                    {message && <p className="h6 text-success text-center"><br />{message}</p>}
                    <Col className='text-center get-started-btn'>
                      {/* <button className='btn btn-lg'>Submit</button> */}
                      <Button type="submit" size="lg">Get Started</Button>
                    </Col>
                  </Row>
                </Form>
              </Col>
            </Container>
          </div>
        </Col>
      </Container>
    </div>
  )
}
