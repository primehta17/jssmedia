import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import Header2 from './Items/Header'
import { Link } from 'react-router-dom'
import Footer2 from './Items/Footer'


export default function ThankYou() {

  useEffect(() => {
    document.title = 'Thank You'
    document.getElementsByTagName('meta')["description"].content = "";
  }, []);

  return (
    <>
      <Header2 />
      <div className='text-center thank-you-cantent pt-70'>
        <Container className='section-content'>
          <h2><span style={{ fontSize: '70px' }}>Thank You...</span></h2>
          <Link to={'/'}>Go back to home</Link>
        </Container>
      </div>
      <div style={{ position: 'fixed', width: '100%', bottom: '0' }}>
        <Footer2 />
      </div>
    </>
  )
}
