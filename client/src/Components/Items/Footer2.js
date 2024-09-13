import React from 'react'
import { Col, Row, Container, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FaFacebook, FaInstagram, FaTwitter, FaTelegram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

export default function Footer2() {
  return (
    <div className='Footer-section pt-5'>
      <Container>
        <Row className='Footer-area'>
          <Col className='footer-logo-section' lg={7}>
            <Link to={'/'}>
              <Image className='footer-logo' width={'175'} src='./jsslogo.jpeg' alt='Logical Fund' />
            </Link>
            <p>This website is the sole property of Jss Media Consultancy</p>
            {/* <p>CIN: U72900MH2021PTC373617</p> */}
            <p>Registered Address: Jainamore, Bokaro, Jharkhand-829301</p>
          </Col>
          <Col className='footer-link-container' lg={5}>
            <Row>
              <Col className='footer-link-section'>
                <p>About Us</p>
                <ul className='footer-link'>
                  <li><Link to={'/about-us'}>About Us</Link></li>
                  <li><a href='#services'>Services</a></li>
                  <li><Link to={'/Suggestion'}>Complaints/Suggestions</Link></li>
                  {/* <li><a href='#contact'>Contact Us</a></li> */}
                </ul>
              </Col>
              <Col className='social-media-section text-center pt-3'>
                <p className='footer-link-section'>Connect with us on Socials:</p>
                <ul className='social-media'>
                  <li><a target={'_blank'} rel="noreferrer" href='https://www.facebook.com/logical.fund/'><FaFacebook /></a></li>
                  <li><a target={'_blank'} rel="noreferrer" href='https://www.instagram.com/logical.fund/'><FaInstagram /></a></li>
                  <li><a target={'_blank'} rel="noreferrer" href='https://www.linkedin.com/company/logical-fund'><FaLinkedinIn /></a></li>
                  <li><a target={'_blank'} rel="noreferrer" href='https://twitter.com/LogicalFund'><FaTelegram /></a></li>
                  <li><a target={'_blank'} rel="noreferrer" href='https://www.youtube.com/@logicalfund'><FaYoutube /></a></li>
                </ul>
              </Col>

            </Row>
          </Col>
        </Row>
        <Col className='social-media-section text-center pt-3'>
          <ul className='social-media'>
            <li><a target={'_blank'} rel="noreferrer" href='https://www.facebook.com/logical.fund/'><FaFacebook /></a></li>
            <li><a target={'_blank'} rel="noreferrer" href='https://www.instagram.com/logical.fund/'><FaInstagram /></a></li>
            <li><a target={'_blank'} rel="noreferrer" href='https://www.linkedin.com/company/logical-fund'><FaLinkedinIn /></a></li>
            <li><a target={'_blank'} rel="noreferrer" href='https://twitter.com/LogicalFund'><FaTwitter /></a></li>
            <li><a target={'_blank'} rel="noreferrer" href='https://www.youtube.com/@logicalfund'><FaYoutube /></a></li>
          </ul>
        </Col>
        <Col className='copyright-section text-center pt-1 pb-2'>
          <p>© 2023 Copyright</p>
          <p>Developed by Aditya Jha</p>
        </Col>
      </Container>
    </div>
  )
}
