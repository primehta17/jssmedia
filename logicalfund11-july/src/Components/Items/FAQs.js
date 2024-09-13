import React from 'react'
import { Accordion, Container, Col, Row } from 'react-bootstrap'

const FAQs = () => {
    return (
        <div className='Single-banner-area'>
            <Container>
                <div className='Single-banner-content'>
                    <h1>FAQS</h1>
                </div>
                <Col className='Single-banner-section'>
                    <div className='Single-banner-section-card'>
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0" >
                                <Accordion.Header><b>What services do you offer?</b></Accordion.Header>
                                <Accordion.Body>
                                    We offer a range of media consultancy services, including photo editing, video editing, brand promotion, reel promotion, and more.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header><b>How long does it take to complete a project?</b></Accordion.Header>
                                <Accordion.Body>
                                    Project timelines vary depending on the scope and complexity of the work. We strive to deliver high-quality results within agreed-upon deadlines.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header><b>Do you offer revisions?</b></Accordion.Header>
                                <Accordion.Body>
                                    Yes, we provide revisions to ensure your satisfaction with the final outcome. Details about revision policies are discussed during the project consultation phase.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header><b>How can I contact you?</b></Accordion.Header>
                                <Accordion.Body>
                                    You can reach out to us via email at [email address], phone at [phone number], or by filling out the contact form on our website.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                </Col>
            </Container>

        </div >
    )
}

export default FAQs