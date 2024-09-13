import React, {useEffect} from 'react'
import { Container, Col } from 'react-bootstrap'


export default function TermsCondition() {

    useEffect(() => {
        document.title = 'Terms & Condition';
        document.getElementsByTagName('meta')["description"].content = "";
        }, []);

  return (
    <div className='Single-banner-area'>
    <Container>
        <div className='Single-banner-content'>
            <h1>Terms & Condition</h1>
        </div>
        <Col className='Single-banner-section'>
            <div className='Single-banner-section-card'>
                <p>Welcome to our website, www.Logical.com If you continue to browse and use this website you are agreeing to comply with and be bound by the following terms and conditions of use, which together with our privacy policy govern Logical's relationship with you in relation to this website. The term 'Logical' or 'us' or 'we' refers to the owner of the website Logical.</p>
                <p>The term 'you' refers to the user or viewer of our website.</p>
                <p>The Use Of This Website Is Subject To The Following Terms Of Use: The content of the pages of this website is for your general information and use only. It is subject to change without notice. Neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness or suitability of the information and materials found or offered on this website for any particular purpose. You acknowledge that such information and materials may contain inaccuracies or errors and we expressly exclude liability for any such inaccuracies or errors to the fullest extent permitted by law.</p>
                <p>Your use of any information or materials on this website is entirely at your own risk, for which we shall not be liable. It shall be your own responsibility to ensure that any products, services or information available through this website meet your specific requirements. This website contains material which is owned by or licensed to us.</p>
                <p>This material includes, but is not limited to, the design, layout, look, appearance and graphics. Reproduction is prohibited other than in accordance with the copyright notice, which forms part of these terms and conditions. All trade marks reproduced in this website which are not the property of, or licensed to, the operator are acknowledged on the website. Unauthorised use of this website may give rise to a claim for damages and/or be a criminal offence. You may not create a link to this website from another website or document without Logical's prior written consent.</p>
                <p>Your use of this website and any dispute arising out of such use of the website is subject to the laws of India or other regulatory authority. By filling out the 'Quick Form' on this website, you agree to provide us your valid mobile number. Also, by providing your mobile number, you provide us the consent to call you on the number provided by you and send SMS on your mobile number.</p>
            </div>
        </Col>
    </Container>
    </div>
  )
}
