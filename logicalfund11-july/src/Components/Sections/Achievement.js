import React from 'react'
import { Container, Image, Col, Row} from 'react-bootstrap'

export default function Achievement() {

  return (
    <div id='achievement' className='section-area achievement-section'>
        <Container className='section-content'>
            <h4>Interacting Numbers</h4>
            <h2><span>Achievements </span> of our Company</h2>
            <Row className="achievement-card-section">
                <Col className='achievement-card-container pt-100' sm={6} md={4}>
                    <div className="achievement-card">
                    <h4>{'>'}50 K</h4>
                    <p>Active Traders</p>
                    <Image src='./assets/images/achievements/traders.svg' alt='Active traders' />
                    </div>
                </Col>
                {/* <Col className='pt-5'>
                    <div className="achievement-card">
                    <h4>Serving {'>'}15</h4>
                    <p>countries</p>
                    <Image src='./assets/images/achievements/market.png' />
                    </div>
                </Col> */}
                <Col className='achievement-card-container' sm={6} md={4}>
                    <div className="achievement-card">
                    <h4>AI Integrated</h4>
                    <p>Research Signals</p>
                    <Image src='./assets/images/achievements/aiIntegrated.svg' alt='AI integrated' />
                    </div>
                </Col>
                {/* <Col className='pt-5'>
                    <div className="achievement-card">
                    <h4>10</h4>
                    <p>Awards Won</p>
                    <Image src='./assets/images/achievements/award.png' />
                    </div>
                </Col> */}
                <Col className='achievement-card-container pt-100'sm={6} md={4}>
                    <div className="achievement-card">
                    <h4>10+ Years</h4>
                    <p>Experience </p>
                    <Image src='./assets/images/achievements/experience.svg' alt='Experience' />
                    </div>
                </Col>
            </Row>
            {/* <Col className='client-ratings'>
            <div className='clients-section'>
            <Image src='./assets/images/clients/client1.png' alt='Average ratings' />
            <Image className='client-2' src='./assets/images/clients/client2.png' alt='Our customers' />
            <Image className='client-2' src='./assets/images/clients/client3.png' alt='Customers' />
            <Image className='client-like' src='./assets/images/clients/like.png'  alt='client-like' />
            </div>
            <div className='client-content'>
                <p>our presence is more</p>
                <p>than 10 years..</p>
            </div>
            </Col> */}
        </Container>
    </div>
  )
}
