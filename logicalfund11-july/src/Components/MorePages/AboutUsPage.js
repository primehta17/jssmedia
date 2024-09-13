import React, { useEffect } from 'react'
import { Container, Col } from 'react-bootstrap'


export default function RefundPolicy() {

    useEffect(() => {
        document.title = 'About Us'
        document.getElementsByTagName('meta')["description"].content = "";
    }, []);

    return (
        <div className='Single-banner-area'>
            <Container>
                <div className='Single-banner-content'>
                    <h1>About Us</h1>
                </div>
                <Col className='Single-banner-section'>
                    <div className='Single-banner-section-card'>
                        <p><b>Company Background:</b>  Jss Media Consultancy was founded with a passion for helping individuals and businesses succeed in the ever-evolving world of media. Our team brings together expertise in photography, videography, marketing, and creative storytelling to deliver exceptional results.</p>
                        <p><b>Mission:</b> Our mission is to empower our clients to achieve their goals through innovative media solutions, personalized service, and a commitment to excellence.</p>
                        <p><b>Team:</b> Meet the talented individuals behind Jss Media Consultancy. Our team comprises experienced professionals with a shared dedication to delivering top-notch media consultancy services.</p>
                        <p><b>Values:</b> Integrity, creativity, and client satisfaction are at the core of everything we do. We believe in building long-lasting relationships based on trust, collaboration, and mutual respect.</p>
                    </div>
                </Col>
            </Container>

        </div >
    )
}
