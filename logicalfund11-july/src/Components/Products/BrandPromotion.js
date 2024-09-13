import React, { Fragment, useState, useEffect } from 'react';
import { Col, Container, Row, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from "axios";
import countryCodes from '../Data/CountryCodes';


export default function BrandPromotion() {
  useEffect(() => {
    document.title = 'BRAND PROMOTION'
    document.getElementsByTagName('meta')["description"].content = "";
  }, []);

  const [inputs, setInputs] = useState({
    tag: 'Brand Promotion Product',
    username: '',
    product: '',
    email: '',
    number: '',
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
    axios.post('/api/submit_products', inputs).then(function (response) {
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


    <Fragment>
      <div className='product-pricing-area'>
        <Container className='section-content'>
          <h2><span>Brand Promotion</span></h2>
        </Container>
      </div>
      <div className='Product-description-container pb-100'>
        <Container>
          <Row>
            <Col md={8}>
              <div className='Product-description-card'>
                <ul className='product-desc-list'>
                  <li><span> What: </span> Let us help you elevate your brand with strategic promotion campaigns tailored to your target audience.</li>
                  <li><span> Description: </span> Our tailored brand promotion strategies help you increase brand awareness, engagement, and loyalty among your target audience.</li>
                  <li><span> Portfolio: </span> Highlight successful brand promotion campaigns we've executed for clients in various industries.</li>
                </ul>
              </div>
              <Row>
                <Col lg={6}>
                  <div className='subscription-area py-4'>
                    <div className='subscription-card'>
                      <div className='subscription-duration'>
                        <h4>Monthly</h4>
                        <h4> 750 SGD</h4>
                      </div>
                      <div className='subscription-btn'>
                        <Link to={'/payment'}>
                          <Button className='gradient-btn'>Buy Now</Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col lg={6}>
                  <div className='subscription-area py-4'>
                    <div className='subscription-card'>
                      <div className='subscription-duration'>
                        <h4>Quarterly</h4>
                        <h4>2000 SGD</h4>
                      </div>
                      <div className='subscription-btn'>
                        <Link to={'/payment'}>
                          <Button className='gradient-btn'>Buy Now</Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>

            <Col md={4}>
              <div className='price-form-container px-3'>
                <Form onSubmit={handleSubmit}>
                  <div className='price-form-content text-center mb-4'>
                    <h4>Get a callback</h4>
                  </div>
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
                      <Form.Select className='select-country-code form-control' aria-label="Default select example" name="numcode" value={inputs.numcode} onChange={handleChange} required>
                        {countryCodes.map((country) => (
                          <option key={country.code} value={country.code}>
                            {`${country.label} (${country.code})`}
                          </option>
                        ))}
                      </Form.Select>
                      <Form.Control type="text" className="wp-number form-control" pattern="\d{9,10}" maxLength={12} title="Please enter valid number."
                        value={inputs.number} placeholder="Whatsapp number" name="number" onChange={handleChange} required />
                    </div>
                  </Form.Group>
                  {/* <Form.Group className="mb-3" controlId="formGroupName">
                    <Form.Label>Do You Have Trading Account?</Form.Label>
                    <Row>
                      <Col>
                        <Form.Check
                          type="radio"
                          label="Yes"
                          value="Yes"
                          name="account"
                          checked={inputs.account === 'Yes'}
                          onChange={handleChange}
                          required
                        />
                      </Col>
                      <Col>
                        <Form.Check
                          type="radio"
                          value="No"
                          name="account"
                          label="No"
                          checked={inputs.account === 'No'}
                          onChange={handleChange}
                          required
                        />
                      </Col>
                    </Row>
                  </Form.Group> */}
                  {message && <p className="h6 text-success text-center"><br />{message}</p>}
                  <div className='product-submit-btn row px-2'>
                    <Button type="submit" className='gradient-btn'>Submit</Button>
                  </div>
                </Form>
                <div className='subscription-area py-4'>
                  <div className='subscription-card'>
                    <div className='subscription-duration'>
                      <h4>Quarterly</h4>
                      <h4>1000 SGD</h4>
                    </div>
                    <div className='subscription-btn'>
                      <Link to={'/payment'}>
                        <Button className='gradient-btn'>Buy Now</Button>
                      </Link>
                    </div>
                  </div>
                </div>

              </div>
            </Col>

          </Row>
        </Container>
      </div>
    </Fragment>
  )
}
