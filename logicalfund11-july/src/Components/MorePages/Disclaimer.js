import React, {useEffect} from 'react'
import { Container, Col } from 'react-bootstrap'


export default function Disclaimer() {

    useEffect(() => {
        document.title = 'Disclaimer'
        document.getElementsByTagName('meta')["description"].content = "";
        }, []);

  return (
    <div className='Single-banner-area'>
    <Container>
        <div className='Single-banner-content'>
            <h1>Disclaimer</h1>
        </div>
        <Col className='Single-banner-section'>
            <div className='Single-banner-section-card'>
                <p>This Site and/or Mobile App and the Content published on it are not intended to provide financial, investment, legal, accounting, or tax advice, or any other professional advice, and nothing on this Site and/or Mobile App, including any Content, should be construed as an offer to sell, a solicitation of an offer to buy, or a recommendation for any security. Users should at all times consult a qualified expert or professional adviser to obtain advice and independent verification of the information and data contained in any content before acting on it.</p> 
                
                <p>Technical signals (and all other signals, training, and analysis provided under a specific client subscription with Logical) are purely a viewpoint of a group of individuals and should not be considered as a solicitation to buy or sell securities as noted above. Hence all visitors are requested to apply their prudence and consult their financial or investment advisors before acting on any of the analyses listed on this site or any of its modes. Neither Logical nor any of its promoters, members, or employees hold any responsibility for losses incurred (if any) by acting on the recommendations.</p>
                
                <p>All data and reports provided at Logical are only information services for customers and are not individualized recommendations to buy or sell securities, nor offers to buy or sell securities. Under any circumstances, the subscription amount paid to Logical is not refundable (Please refer to our Sales and No Refunds Policy for more details).</p>
                
                <p>Investment in equity shares, futures, options, and commodities has its own risks. Sincere efforts have been made to present the right analytical insights. The information contained herein is based on analysis and on sources that we consider reliable. We, however, do not vouch for the accuracy or the completeness thereof. This material is for personal information and distributed in general and not client specific and we are not responsible for any loss incurred due to it & take no responsibility whatsoever for any financial profits or loss which may arise from the content above.</p>
                
                <p>This Website is for information purposes only. The information contained in this should not be construed as an offer to sell, a solicitation of an offer to buy, or a recommendation for the units of the schemes of Logical. Logical is neither responsible nor liable for third-party content provided or content from any other aspect of any other Website, which may be accessed from this Website.</p>
                
                <p>Our Clients (Paid or Unpaid), any third party, or anyone else have no rights to forward or share our content or SMS Reports, or any other information provided by us to/with anyone who is received directly or indirectly by them. If found so then serious legal actions can be taken. The content of the site and the interpretation of data are solely the personal views of the contributors. Logical reserves the right to make modifications and alterations to the content of the website at any time. Users are advised to use the data for the purpose of information only and rely on their own judgment while making individual investment decisions. The values of all the indices displayed on the website may be delayed by up to 10 minutes. The investments discussed or recommended may not be suitable for all investors. Logical does not warranty the timeliness, accuracy, or quality of the electronic content on its and other affiliate websites.</p>
                
                <p>A possibility exists that the site could include inaccuracies or errors. Additionally, a possibility exists that unauthorized additions, deletions, or alterations could be made by third parties to the site. Although Logical attempts to ensure the integrity, correctness, and authenticity of the site, it makes no guarantees whatsoever as to its completeness, correctness, or accuracy. In the event that such an inaccuracy arises, please inform Logical so that it can be corrected.</p>
                
                <p>The price and value of investments and the income derived from them can go up or down and you may not get back the capital invested. Changes in the rate of exchange may have an adverse effect on the value, price, and income of investments in deposits other than your own. Past performance is not necessarily an indicator of future performance. The content of the website cannot be copied, reproduced, republished, uploaded, posted, transmitted, or distributed for any non-personal use without obtaining prior permission from Logical. We reserve the right to terminate the accounts of subscribers/customers, who violate the proprietary rights, in addition to necessary legal action.</p>
                
                <p>Logical and its owners/affiliates are not liable for damages caused by any performance, failure of performance, error, omission, interruption, deletion, defect, delay in transmission or operations, computer virus, communications line failure, and unauthorized access to personal accounts. Logical is not responsible for any technical failure or malfunction of the software or delays of any kind. We are also not responsible for non-receipt of registration details or e-mails. Logical is not responsible for the content of any of the linked sites. By providing access to other websites, Logical is neither recommending nor endorsing the content available on the linked websites.</p>
                
                <p>You agree that the information gathered from your profile will be used to enhance your experience on the website. We will not rent or sell the profile to any third party. In case of a contest or a promotion scheme, we reserve the right to share the user's profile with the sponsors. In the event of necessary credit checks and collection of payments, Logical can disclose such information to other authorities in good faith. Logical will use all or any part of the service and change terms without any obligation. By filling out the 'Quick Form' on this website, you agree to provide us with your valid mobile number and email address. Also, by providing your mobile number, you provide us with the consent to call you on the number provided by you and send SMS on your mobile number.</p>
                
                <p>This website is for the exclusive purpose of transactions to be carried out within the territorial jurisdiction of Singapore and all such transactions shall be governed by the laws in Singapore. Under Singapore financial law and regulations, Logical is an exempt information service provider. For the avoidance of doubt, Logical is not a broker, dealer, investment, or financial adviser under Singapore law or securities laws of other jurisdictions. Logical does not advise individuals or entities as to the advisability of investing in, purchasing, or selling securities or other financial products or services. Content is not professional advice or solicitation to buy/trade securities. For Logical, provided content is not personalized, targeted, or direct financial investment advice, and because there is the absence of any traditional client/advisor relationship, then such content does not fall within the scope of financial advice for the purposes of relevant Singapore regulation and such content would not require licensing.</p>
                
                <p>You understand and agree that no joint venture, partnership, employment, or agency relationship exists between you and Logical due to, this agreement or on account of the use of our website. The price and availability of products and services offered on the site are subject to change without prior notice. We provide information about the availability of products or services to a certain extent but you should not rely on such information. Logical will not be liable for any lack of availability of products and services you may order through the site.</p>
                
                <p>Governing Law Transactions between you and Logical shall be governed by and construed in accordance with the laws of Singapore, without regard to the laws regarding conflicts of law. Any litigation regarding this agreement or any transaction between the customer and Logical or any action at law or in equity arising out of or relating to these agreements or transactions shall be filed only in the Competent Courts of Indore, India alone and the customer hereby agrees, consents and submits to the jurisdiction of such courts for the purpose of litigating any such action.</p>
            
            </div>
        </Col>
    </Container>
    </div>
  )
}
