import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function ThankYou() {

  useEffect(() => {
    document.title = 'Login First'
    document.getElementsByTagName('meta')["description"].content = "";
  }, []);

  return (
    <>

      <div className='text-center thank-you-cantent pt-70'>
        <Container className='section-content'>
          <h2><span style={{ fontSize: '65px' }}>Please login first to access payment....</span></h2>
          <Link className='text-center m-3' to={'/'} style={{ fontSize: '35px' }} >Go back to home</Link>
        </Container>
      </div>

    </>
  )
}
