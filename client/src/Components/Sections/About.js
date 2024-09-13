import React from "react"
import { Row, Col, Container, Image, Button } from 'react-bootstrap'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaRocket, FaTools, FaChartLine, FaCamera, FaComments, FaClipboardList } from 'react-icons/fa';
import { Link } from 'react-router-dom';
export default function About() {

  // const [isShowMore, setIsShowMore] = useState(false);

  // const toggleReadMoreLess = () => {
  //     setIsShowMore(!isShowMore);
  // };

  return (
    <div id="about-us" className='section-area about-area'>
      <Container className='section-content'>
        <h2><span>About </span> Us</h2>
        <Row className='About-content'>
          <Col md={6}>
            <p>Welcome to Jss Media Consultancy, your one-stop solution for all your media needs. We specialize in photo editing, video editing, brand promotion, reel promotion, and more.
              {/* {isShowMore && (
                <span> </span>
                )} */}
            </p>
            <Link to={'about-us'}>Know more</Link>
            {/* <Link className="read-more-less" onClick={toggleReadMoreLess}>{isShowMore ? "Read Less" : "Read More..."}</Link> */}

          </Col>
          <Col className='about-banner' md={6}>
            <Image src='./assets/images/banners/about-banner.svg' alt="Investment Adviser" />
          </Col>
        </Row>


      </Container>
      <Container className='section-area'>
        <Col className='section-content text-center'>
          <h2><span>How </span> it works</h2>
          {/* <p>To enable our product services, you will need to register with us, complete your RPM and KYC, sign our service agreement, and subscribe to the services that you want to use. Once you have completed these steps, you will be able to use our product services. Our product services include a variety of features that can help you to manage your finances, invest your money, and grow your wealth. We are committed to providing our clients with the best possible service. If you have any questions, please do not hesitate to contact us. We would be happy to help you.</p> */}
        </Col>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            iconStyle={{ background: 'linear-gradient(278.14deg, #baa673 1.21%, #3f4658 100%)', color: '#fff' }}
            icon={<FaComments />}
          >
            <h4 className="vertical-timeline-element-title">Initial Consultation</h4>
            <p>Schedule a meeting with our team to discuss your media needs and goals. We'll gladly listen to all of your requirements, fully understand your clear vision, and provide personalized recommendations specifically tailored to your objectives.</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            iconStyle={{ background: 'linear-gradient(278.14deg, #baa673 1.21%, #3f4658 100%)', color: '#fff' }}
            icon={<FaChartLine />}
          >
            <h4 className="vertical-timeline-element-title">Media Assessment</h4>
            <p>Our team will keenly analyze your current media assets if any exist, in order to identify strengths, weaknesses, and areas that could benefit from improvement.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            iconStyle={{ background: 'linear-gradient(278.14deg, #baa673 1.21%, #3f4658 100%)', color: '#fff' }}
            icon={<FaClipboardList />}
          >
            <h4 className="vertical-timeline-element-title">Service Proposal</h4>
            <p>Based on our very detailed consultation and thorough assessment, we'll happily present a very detailed service proposal that outlines the specific solutions and strategies we are recommending. The proposal will include a very detailed breakdown of services, as well as the various timelines, pricing details, and expected outcomes that we foresee.</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            iconStyle={{ background: 'linear-gradient(278.14deg, #baa673 1.21%, #3f4658 100%)', color: '#fff' }}
            icon={<FaCamera />}
          >
            <h4 className="vertical-timeline-element-title">Media Production</h4>
            <p>Upon the approval of the proposal - which we are eagerly awaiting - we'll then joyously proceed with the production phase, where we create or enhance your media content according to the plan that was agreed upon.</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            iconStyle={{ background: 'linear-gradient(278.14deg, #baa673 1.21%, #3f4658 100%)', color: '#fff' }}
            icon={<FaRocket />}
          >
            <h4 className="vertical-timeline-element-title">Launch and Promotion</h4>
            <p>We happily, with great enthusiasm, assist with the launch and promotion of your media across a wide range of relevant channels, including social media, websites, email campaigns, and more. Our ambitious goal is to maximize the visibility, engagement, and impact, driving results for your wholesome business or personal brand.</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            iconStyle={{ background: 'linear-gradient(278.14deg, #baa673 1.21%, #3f4658 100%)', color: '#fff' }}
            icon={< FaTools />}
          >
            <h4 className="vertical-timeline-element-title">Ongoing Support and Maintenance</h4>
            <p>Our dedicated partnership doesn't simply end after the initial project. We graciously offer ongoing support and maintenance services to ensure that your media remains fresh, relevant, and effective over the duration of time.</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
        <Col className="timeline-btn text-center">
          <Button href="#contact" className='learn-more-btn gradient-btn'>Learn more</Button>
        </Col>
      </Container>
    </div>
  )
}
