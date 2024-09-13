import React, { useEffect } from 'react'
import { Container, Col } from 'react-bootstrap'


export default function RefundPolicy() {

    useEffect(() => {
        document.title = 'Refund Policy'
        document.getElementsByTagName('meta')["description"].content = "";
    }, []);

    return (
        <div className='Single-banner-area'>
            <Container>
                <div className='Single-banner-content'>
                    <h1>Refund Policy</h1>
                </div>
                <Col className='Single-banner-section'>
                    <div className='Single-banner-section-card'>
                        <p>Refund Policy <b></b> we value our customer's and are committed for providing world class content. While we take our research seriously, our clients should realize that we do NOT offer a any guarantee or returns based on the site's content and hence cannot offer any refund on subscriptions. Please note that all sales are final.</p>
                        <p>Once a service has been subscribed to and a payment has been made for the same, the client will start access to the content that they registered for. If for some unforeseen reason, the client is not satisfied with our services, they may call us to seek direction on the applicability of the content. We will put our best effort to increase the satisfaction levels in such cases. However, any request by the client to cancel a service or get a refund will NOT be accepted in any case. In an unlikely event that after payment, service for a client is not started for technical reasons beyond the control of Logical or if Logical decides not to start service for a specific client, the client will be paid back as soon as possible. This will not be applicable if the client is not able to receive sms on the number provided by the client because of client's phone out of service/network status.</p>
                        <p>If the records from our SMS service provider indicate that service sms were sent to the number that client provided, we will deem that as delivery of service from our end and will not entertain any refund based on non-delivery of SMS. ***NO REFUND POLICY** * We strongly recommend to our visitors / potential clients, that before making a payment, they must : Read all information about our products, services and support given to our clients.</p>
                    </div>
                </Col>
            </Container>

        </div>
    )
}
