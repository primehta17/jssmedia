import React from 'react'
import { Col, Container, Row, Image } from 'react-bootstrap'

export default function MainBanner() {
  return (
    <div id="home" className='main-banner-area'>
      <Container>
        <Row className='main-banner-section'>
          <Col className='banner-title' md={6}>
            <h1>Let Your Story Shine Brighter with JSS Media Consultancy.</h1>
            <p>Crafting Visual Brilliance, One Frame at a Time.</p>
          </Col>
          <Col className='banner-img text-center' md={6}>
            <Image src='./assets/images/banners/main-banner.svg' alt='Future of trading' />
          </Col>
        </Row>
      </Container>
    </div>
  )
}
