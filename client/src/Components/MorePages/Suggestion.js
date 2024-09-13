import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Container, Row, Col, FloatingLabel, Form, Button } from 'react-bootstrap'
import countryCodes from '../Data/CountryCodes';

export default function Suggestion() {

  useEffect(() => {
    document.title = 'Suggestion'
    document.getElementsByTagName('meta')["description"].content = "";
  }, []);

  const [inputs, setInputs] = useState({
    tag: 'Suggestion',
    username: '',
    executive: '',
    querymsg: '',
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
    axios.post('http://localhost:7000/api/submit-complaint', inputs).then(function (response) {
      console.log(response.data);
      if (response.status === 200) {
        setInputs({ tag: '', querymsg: '', username: '', email: '', number: '', numcode: '' });
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
          <h1>We are here to assist you</h1>
        </div>
        <Col>
          <div className='Support-form-area'>
            <Container>
              <Col className='support-form-content'>
                {/* <p>Please complete the form below for your complaints.</p> */}
                <p>Please complete the form below for your Suggestion.</p>
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

                    <Col lg={12}>
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
                    {/* <Col lg={6}>
                      <FloatingLabel className="mb-3" controlId="floatingInput" label="Executive Name">
                        <Form.Control type='text' placeholder="Executive Name" value={inputs.executive} name="executive" onChange={handleChange} required />
                      </FloatingLabel>
                    </Col> */}

                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                      <Form.Control placeholder='Message' as="textarea" rows={3} value={inputs.querymsg} name="querymsg" onChange={handleChange} required />
                    </Form.Group>
                    {message && <p className="h6 text-success text-center"><br />{message}</p>}
                    <Col className='text-center get-started-btn'>
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


