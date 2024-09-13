import React, { useState, useEffect } from 'react'
import { Col, Container, Form, Row, Button, Image } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from "axios";
import countryCodes from '../Data/CountryCodes';
import LoginFirst from '../LoginFirst'
function Payment() {

  const [selectedOption, setSelectedOption] = useState('--Select Product--');
  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const [loggedIn, setLoggedIn] = useState(false); // Track login status
  const [email, setEmail] = useState(''); // Store email/email
  const [amount, setAmount] = useState('eg: 300')
  const handleSelectAmount = (event) => {
    setAmount(event.target.value);
  };
  function handleCombinedChange(event) {
    handleSelectChange(event);
    handleChange(event);
  }

  function handleAmountChange(event) {
    handleSelectAmount(event);
    handleChange(event);
  }

  useEffect(() => {
    document.title = 'Payment'
    document.getElementsByTagName('meta')["description"].content = "";
  }, []);


  const [inputs, setInputs] = useState({
    tag: 'Payment',
    username: '',
    product: '',
    email: '',
    amount: '',
    number: '',
    numcode: '',
    account: '',
    MID: 'MID' + Date.now(),
    transactionId: 'T' + Date.now()
  });

  const [message, setMessage] = useState('');
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }));
  }

  useEffect(() => {
    // Check if the user is logged in (you need to implement this logic)
    const loggedInEmail = localStorage.getItem('loggedInEmail');
    const email = localStorage.getItem('email');
    console.log(email + "email user" + loggedInEmail);
    if (loggedInEmail && email) {
      setLoggedIn(true);
      setEmail(email);
    }
  }, []);
  let data = {
    name: "vikas",
    amount: 1,
    number: '9999999999',
    MID: 'MID' + Date.now(),
    transactionId: 'T' + Date.now()
  }

  // const HandleClick = async () => {
  //   try {
  //     await axios.post('http://localhost:8000/order', data).then(res => {
  //       console.log(res.data)
  //       if (res.data.success === true) {
  //         window.location.href = res.data.data.instrumentResponse.redirectInfo.url
  //       }
  //     }).catch(err => {
  //       console.log(err)
  //     })
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }
  const handleSubmitPayPal = (event, buttonName) => {
    event.preventDefault();

    // Perform form validation
    if (
      !inputs.username ||
      !inputs.email ||
      !inputs.numcode ||
      !inputs.number ||
      !inputs.account ||
      !inputs.product ||
      inputs.product === "--Select Product--"
    ) {
      setMessage("*Please fill the form to proceed...");
      return; // Exit the function if validation fails
    }

    axios.post('http://localhost:7000/api/orderpaypal', inputs).then(function (response) {
      console.log(buttonName);
      console.log(response);
      if (response && response.inputs) {

        let link = response.inputs.links[1].href
        window.location.href = link

      }
      // window.location.href = `/api/final/payment.php?amount=${inputs['account']}&username=${inputs['username']}&email=${inputs['email']}&product=${inputs['product']}&numcode=${inputs['numcode']}&paymode=${buttonName}&number=${buttonName}`;

      if (response.status === 200) {

        setInputs({ tag: 'Payment', account: '', username: '', email: '', product: '', number: '', numcode: '', amount: '' });
        setMessage('proceeding...');
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

  const handleSubmit = (event, buttonName) => {
    event.preventDefault();

    // Perform form validation
    if (
      !inputs.username ||
      !inputs.email ||
      !inputs.numcode ||
      !inputs.number ||
      !inputs.account ||
      !inputs.product ||
      inputs.product === "--Select Product--"
    ) {
      setMessage("*Please fill the form to proceed...");
      return; // Exit the function if validation fails
    }

    axios.post('http://localhost:7000/api/order', inputs).then(function (response) {
      console.log(buttonName);
      console.log(response.inputs)
      if (response.inputs.success === true) {
        window.location.href = response.inputs.inputs.instrumentResponse.redirectInfo.url
      }
      window.location.href = `/api/final/payment.php?amount=${inputs['account']}&username=${inputs['username']}&email=${inputs['email']}&product=${inputs['product']}&numcode=${inputs['numcode']}&paymode=${buttonName}&number=${buttonName}`;

      if (response.status === 200) {

        setInputs({ tag: 'Payment', account: '', username: '', email: '', product: '', number: '', numcode: '', amount: '' });
        setMessage('proceeding...');
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
  if (!loggedIn) {
    return < LoginFirst />;
  }
  return (
    <div className='Single-banner-area'>
      <Container>
        <div className='Single-banner-content'>
          <h1>Payment Details</h1>
        </div>
        <Form onSubmit={handleSubmit}>
          <Row className='Single-banner-section'>
            <Col lg={8}>
              <div className='Payment-form-area mb-4'>
                <Row className='Payment-form-content'>

                  <Col lg={6}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Full Name*</Form.Label>
                      <Form.Control type="text" placeholder="Full Name" name="username" value={inputs.username} onChange={handleChange} required />
                    </Form.Group>
                  </Col>
                  <Col lg={6}>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Email*</Form.Label>
                      <Form.Control type="email" placeholder="Email" name="email" value={inputs.email} onChange={handleChange} required />
                    </Form.Group>
                  </Col>

                  <Col lg={6}>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Contact Number*</Form.Label>
                      <div className="number-field">
                        <Form.Select className='select-country-code form-control' aria-label="Default select example" name="numcode" value={inputs.numcode} onChange={handleChange} required >
                          {countryCodes.map((country) => (
                            <option key={country.code} value={country.code}>
                              {`${country.label} (${country.code})`}
                            </option>
                          ))}
                        </Form.Select>
                        <Form.Control type="text" className="wp-number form-control" pattern="\d{9,10}" maxLength={12} title="Please enter valid number." value={inputs.number} placeholder="Whatsapp number" name="number" onChange={handleChange} required />
                      </div>
                    </Form.Group>
                  </Col>

                  <Col lg={6}>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Amount*</Form.Label>
                      <Form.Control onChange={handleAmountChange} type="text" value={inputs.account} placeholder="300" name="account" required />
                    </Form.Group>
                  </Col>

                  <Col>
                    <Form.Label>Product*</Form.Label>
                    <Form.Select onChange={handleCombinedChange} name="product" value={inputs.product} required aria-label="Select Product">
                      <option>--Select Product--</option>
                      {/* <option disabled>--amc--</option> */}
                      <option value="Photo Editing">Photo Editing</option>
                      <option value="Video Editing">Video Editing</option>
                      <option value="Brand Promotion">Brand Promotion</option>
                      <option value="Reel Promotion">Reel Promotion</option>

                    </Form.Select>
                  </Col>
                </Row>

              </div>
            </Col>

            <Col lg={4}>
              <Col>
                <div className='order-summary'>
                  <h3>Order Summary</h3>
                  <hr />
                  <h4>{selectedOption}</h4>
                  <hr />
                  <div className='amount-section'>
                    <h5>Amount</h5>
                    <h5>{amount}&nbsp;SGD</h5>
                  </div>
                  <div className='amount-payable-section'>
                    <h5>Amount Payable</h5>
                    <h5>{amount}&nbsp;SGD</h5>
                  </div>

                  <div className='Payment-container pt-5'>
                    <p>Pay By PayPal</p><hr />
                    <div className='PayPal-Stripe'>
                      <Image src='./assets/images/payment-icons/pay_by_paypal.png' />
                      <Button type="submit" className='payment-btn gradient-btn' name="paypal" onClick={(event) => handleSubmitPayPal(event, event.target.name)}>Make Paymentss</Button>
                    </div>
                  </div>

                  <div className='Payment-container pt-5'>
                    <p>Pay By Phonepe</p><hr />
                    <div className='PayPal-Stripe'>
                      <Image src='./assets/images/payment-icons/phonepe.svg' />
                      <Button type="submit" className='payment-btn gradient-btn' name="phonepe" onClick={(event) => handleSubmit(event, event.target.name)}>Make Payment</Button>
                    </div>
                  </div>

                  <div className='reqmsg pt-2 text-center'>
                    <p>{message}</p>
                  </div>

                </div>
              </Col>
            </Col>
          </Row>
        </Form>
      </Container>
    </div>
  )
}

export default Payment
