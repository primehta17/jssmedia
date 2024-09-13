import React from 'react'
import { Col, Row, Container, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FaFacebook, FaInstagram, FaTelegram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <div className='Footer-section pt-5'>
      <Container>
        <Row className='Footer-area'>
          <Col className='footer-logo-section' lg={5}>
            <Link to={'/'}>
              <Image className='footer-logo' width={'175'} src='./jsslogo.jpeg' alt='Logical Fund' />
            </Link>
            <p>This website is the sole property of Jss Media Consultancy</p>
            {/* <p>CIN: U72900MH2021PTC373617</p> */}
            <p>Registered Address: Jainamore, Bokaro, Jharkhand-829301</p>
          </Col>
          <Col className='footer-link-container' lg={7}>
            <Row>
              {/* <Col className='footer-link-section'>
              <p>More</p>
              <ul className='footer-link'>
                <li><Link to={'/payment'}>Payment</Link></li>
                <li><Link to={'/blogs_'}>Blogs</Link></li>
                <li><Link to={'/kyc'}>KYC</Link></li>
                <li><Link to={'/rpm'}>RPM</Link></li>
                <li><Link to={'/complaint'}>Complaint</Link></li>               
                <li><a target={'_blank'} href='sitemap.xml'>Sitemap</a></li>
              </ul>
            </Col> */}
              {/* <Col className='footer-link-section'>
              <p>Term of Use</p>
              <ul className='footer-link'>
                <li><Link to={'/refund-policy'}>Refund Policy</Link></li>
                <li><Link to={'/disclaimer'}>Disclaimer</Link></li>
                <li><Link to={'/privacy-policy'}>Privacy Policy</Link></li>
                <li><Link to={'/terms-condition'}>Terms & Conditions</Link></li>
                <li><Link to={'/support-grievance'}>Support/Grievance</Link></li> */}
              {/* <li><Link>Site-Map</Link></li> */}
              {/* </ul>
            </Col> */}
              <Col className='footer-link-section'>
                <p>About Us</p>
                <ul className='footer-link'>
                  <li><a href='#about-us'>About Us</a></li>
                  <li><a href='#price'>Services</a></li>
                  <li><Link to={'/Suggestion'}>Complaints/Suggestions</Link></li>
                  <li><a href='#contact'>Contact Us</a></li>
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

        <Col className='copyright-section text-center pt-1 pb-2'>
          <p>© 2023 Copyright</p>
          <p>Developed by Aditya Jha</p>
        </Col>
      </Container>
    </div>
  )
}
