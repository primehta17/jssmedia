import React, {useEffect} from 'react'
import { Container } from 'react-bootstrap'
import Header2 from './Items/Header'
import { Link } from 'react-router-dom'
import Footer2 from './Items/Footer'


export default function Error404() {

  useEffect(() => {
    document.title = 'Error404'
    document.getElementsByTagName('meta')["description"].content = "";
    }, []);

  return (
    <div>
    <Header2 />
    <div className='text-center pt-70'>
      <Container className='section-content'>
      <h2><span>Error 404 Page Not Found</span></h2>
        <p>The requested page does not exist.</p>
        <Link to={'/'}>Go back</Link>
      </Container>
    </div>
    <div style={{position: 'absolute', width: '100%', bottom: '0'}}>
      <Footer2/>
    </div>
    </div>
  )
}
