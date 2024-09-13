import React from 'react'
import { Container, Col, Image, } from 'react-bootstrap'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import TestimonialsData from '../Data/TestimonialsData'

export default function Testimonial() {
  return (
    <div className='section-area Testimonial-area'>
        <Container className='section-content'>
        <h2><span>See What </span> our clients say!</h2>
        </Container>
        <Col className='carousel-section'>
        <Container>
        <h3>Trusted by millions of investors</h3> <br/><br/>
        <Carousel infiniteLoop>
        {TestimonialsData.map((testimonial, index) => (
            <div key={index} className='carousel-Item'>
                <Image className='quote' src="./assets/images/Icons/quote.svg" alt='first' />
                {testimonial.description}
                {/* <Image className='testimonial-user'  src='./assets/images/clients/testimonial-user.svg' /> */}
                <h4>{testimonial.name}</h4>
            </div>
        ))}
        </Carousel>
        </Container>
        </Col>
    </div>
  )
}
