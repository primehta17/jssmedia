import React, {useState , useEffect} from 'react'
import { Col, Container, Form, Row, Button, Image} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useLocation } from 'react-router-dom';
import countryCodes from '../Data/CountryCodes';


function CustomizedPayment() {

    const [payableAmount, setPayableAmount] = useState('eg: 300')
    const handlePayableAmount = (event) => {
        setPayableAmount(event.target.value);
    };

    useEffect(() => {
        document.title = 'Customized Payment'
        document.getElementsByTagName('meta')["description"].content = "";
        }, []);


//  SGD payable amount
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const productName = searchParams.get('productName');

  return (
    <div className='Single-banner-area'>
    <Container>
    <div className='Single-banner-content'>
            <h1>Payment Details</h1>
    </div>
    <Row className='Single-banner-section'>
    <Col lg={8}>
    <Form className='Payment-form-area mb-4'>
        <Row className='Payment-form-content'>
            {/* <h5>Personal details</h5> */}
            <Col lg={6}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Full Name*</Form.Label>
                <Form.Control type="name" placeholder="Full Name" />
            </Form.Group>
            </Col>
            <Col lg={6}>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Email*</Form.Label>
                <Form.Control type="email" placeholder="Email" />
            </Form.Group>
            </Col>

            <Col lg={6}>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Contact Number*</Form.Label>
                <div className="number-field">
                    <Form.Select className='select-country-code form-control' aria-label="Default select example" required>
                    {countryCodes.map((country) => ( 
                    <option key={country.code} value={country.code}>
                    {`${country.label} (${country.code})`}
                    </option>
                    ))}
                    </Form.Select>
                    <Form.Control type="text" className="wp-number form-control" pattern="^(?:[+]6|\\+65)?[05](([0-9]{2}((\s[0-9]{3,4}\s[0-9]{4})|(-[0-9]{3,4}\s[0-9]{4})|(-[0-9]{7,8})))|([0-9]{9,10}))$"
                     placeholder="Whatsapp number" name="number" required />
                </div>
            </Form.Group>
            </Col>
            
            <Col lg={6}>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Amount*</Form.Label>
                <Form.Control  onChange={handlePayableAmount} placeholder={payableAmount} type="text" />
            </Form.Group>
            </Col>

            <Col>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Product*</Form.Label>
                <Form.Control value={productName} type="text" />
            </Form.Group>
            </Col>
        </Row>
        {/* <div className='application-submit-btn  mb-3 mt-4 text-center'>
            <Button className='gradient-btn' variant="primary" type="submit">Submit</Button>
        </div> */}
    </Form>
    </Col>

    <Col lg={4}>
        <Col>
        <div className='order-summary'>
            <h3>Order Summary</h3>
            <hr/>
            <h4>{productName}</h4>
            <hr/>
            <div className='amount-section'>
                <h5>Amount</h5>
                <h5>{payableAmount}&nbsp;SGD</h5>
            </div>
            <div className='amount-payable-section'>
                <h5>Amount Payable</h5>
                <h5>{payableAmount}&nbsp;SGD</h5>
            </div>

            <div className='Payment-container pt-5'>
            <p>Pay By PayPal</p><hr/>
            <div className='PayPal-Stripe'>
                <Image src='./assets/images/payment-icons/pay_by_paypal.png' />
                <Button className='payment-btn gradient-btn'>Make Payment</Button>
            </div>
            </div>

            <div className='Payment-container pt-5'>
            <p>Pay By Stripe</p><hr/>
            <div className='PayPal-Stripe'>
                <Image src='./assets/images/payment-icons/Stripe_Logo.png' />
                <Button className='payment-btn gradient-btn'>Make Payment</Button>
            </div>
            </div>
        </div>
        </Col> 
    </Col>
    </Row>
  </Container>
</div>
  )
}

export default CustomizedPayment
