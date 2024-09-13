import React, {useEffect} from 'react'
import { Container, Col } from 'react-bootstrap'


export default function PrivacyPolicy() {

    useEffect(() => {
        document.title = 'Privacy & Policy'
        document.getElementsByTagName('meta')["description"].content = "";
        }, []);

  return (
    <div className='Single-banner-area'>
    <Container>
        <div className='Single-banner-content'>
            <h1>Privacy Policy</h1>
        </div>
        <Col className='Single-banner-section'>
            <div className='Single-banner-section-card'>
                <p>Logical respects and values the Right to Privacy of each and every individual belongs to us. We are ethical in our relationships to our clients. Being Logical's clients you have a promise from us that we shall remain loyal to all our clients and non clients whose information resides with us. This Privacy Policy applies to our existing clients as well as former clients. You will find the guidelines governing our Privacy Policy below:</p>
                <p>Your information, whether public or private, will NOT be sold, rented, exchanged, transferred or given to any company or individual for any reason without your consent.</p>
                <p>Your information given to us represents your identity with us. If any changes are brought in any of the fields of which you have provided us the information, you shall bring it to our notice by either calling us or sending an email to us.</p>
                <p>In addition to the service provided to you, your information (mobile number, E-mail ID etc.) can be brought in use for sending you newsletters, surveys, contest information, or information about any new services of the company which will be for your benefit and while subscribing for our services, you agree that Logical has the right to do so.</p>
                <p>By subscribing to our services, you consent to our Privacy Policy and Terms of Use. By filling out the 'Quick Form' on this website, you agree to provide us your valid mobile number. Also by providing your mobile number, you provide us the consent to call you on the number provided by you and send SMS on your mobile number.</p>
            </div>
        </Col>
    </Container>
    </div>
  )
}
