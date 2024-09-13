import React from "react";
import PropTypes from 'prop-types';
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Container, Col, Row, Image, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaCameraRetro, FaBullhorn, FaVideo, FaFilm } from "react-icons/fa";
// import Switch from "react-switch";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}



export default function Pricing() {


  const [value, setValue] = React.useState(0);
  // const [checked, setChecked] = useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // const handleSwitch = (checked) => {
  //   setChecked(checked);
  // };

  return (
    <div id="price" className='section-area pricing-area'>
      <Container className='section-content'>
        <h2><span>Ready </span> to get started ?</h2>
        <h5>Choose a service tailored to your needs</h5>
        <Col className='Pricing-tab-container pt-5'>
          <h3>Our Services </h3>
          <Box sx={{ width: '100%' }}>
            <TabPanel value={value} index={0}>
              <Row className='price-cart-tab'>

                <Col className='price-card-section' lg={4} md={6}>
                  <Col className='price-card'>
                    <div className='price-card-Img pb-3'>
                      <FaCameraRetro />
                      {/* <Image src={'./assets/images/pricing/shariah-basic.svg'} alt="Photo Editing" /> */}
                    </div>
                    <h3>Photo Editing</h3>
                    <ul className='product-desc-list price-card-content'>
                      <li><span> What: </span> Transform your photos with our professional editing services, ensuring they stand out from the crowd.</li>
                      <li><span> Description : </span> Our expert photo editing services enhance the visual appeal of your images, whether it's retouching, color correction, or creative effects.</li>
                    </ul>
                    <Link to={'/photo-editing'}>Know more</Link>
                  </Col>
                  <Link to={'/photo-editing'}>
                    <Button className='gradient-btn price-card-btn'>Subscribe Now</Button></Link>
                </Col>

                <Col className='price-card-section' lg={4} md={6}>
                  <Col className='price-card'>
                    <div className='price-card-Img text-center pb-3'>
                      <FaVideo />{/* <Image src={'./assets/images/pricing/shariah-premium.svg'} alt="Video Editing" /> */}
                    </div>
                    <h3>Video Editing</h3>
                    <ul className='product-desc-list price-card-content'>
                      <li><span> What: </span>  From simple edits to complex post-production work, we bring your videos to life with creativity and precision.</li>
                      <li><span> Description:  </span> From basic cuts to advanced effects, we craft compelling videos that captivate your audience and convey your message effectively.</li>
                    </ul>
                    <Link to={'/video-editing'}>Know more</Link>
                  </Col>
                  <Link to={'/video-editing'}>
                    <Button className='gradient-btn price-card-btn'>Subscribe Now</Button>
                  </Link>
                </Col>

                <Col className='price-card-section' lg={4} md={6}>
                  <Col className='price-card'>
                    <div className='price-card-Img text-center pb-3'>
                      <FaBullhorn />{/* <Image src={'./assets/images/pricing/brand-promotion.svg'} alt="Brand Promotion" /> */}
                    </div>
                    <h3>Brand Promotion</h3>
                    <ul className='product-desc-list price-card-content'>
                      <li><span> What: </span> Let us help you elevate your brand with strategic promotion campaigns tailored to your target audience.</li>
                      <li><span>Description: </span> Our tailored brand promotion strategies help you increase brand awareness, engagement, and loyalty among your target audience.</li>
                    </ul>
                    <Link to={'brand-promotion'}>Know more</Link>
                  </Col>
                  <Link to={'/brand-promotion'}>
                    <Button className='gradient-btn price-card-btn'>Subscribe Now</Button>
                  </Link>
                </Col>

                <Col className='price-card-section' lg={4} md={6}>
                  <Col className='price-card'>
                    <div className='price-card-Img text-center pb-3'>
                      <FaFilm />{/* <Image src={'./assets/images/pricing/bursa-optimal.svg'} alt="Reel Promotion" /> */}
                    </div>
                    <h3>Reel Promotion</h3>
                    <ul className='product-desc-list price-card-content'>
                      <li><span> What: </span> Maximize your reach and engagement on social media platforms with our reel promotion services.</li>
                      <li><span> Description: </span> Harness the power of social media reels to boost your online presence and attract more followers and customers.</li>
                    </ul>
                    <Link to={'reel-promotion'}>Know more</Link>
                  </Col>
                  <Link to={'/reel-promotion'}>
                    <Button className='gradient-btn price-card-btn'>Subscribe Now</Button>
                  </Link>
                </Col>

                {/* <Col className='price-card-section' lg={4} md={6}>
                  <Col className='price-card'>
                    <div className='price-card-Img text-center pb-3'>
                      <Image src={'./assets/images/pricing/bursa-hni.svg'} alt="Bursa HNI" />
                    </div>
                    <h3>Bursa HNI</h3>
                    <ul className='product-desc-list price-card-content'>
                      <li>Swing from Bursa Malaysia </li>
                      <li><span> Product Description: </span> Designed for High Risk Appetite Customers, Intra/Contra/Swing, Proper Entry and Exit levels given with Stop Loss</li>
                      <li><span> Risk Suitability: </span> High</li>
                      <li><span>Minimum Capital: </span> 70000RM TO 100000RM</li>
                      <li><span> Analysis: </span> Technical and Fundamental analysis and Sentimental Analysis</li>
                    </ul>
                    <Link to={'/bursa-HNI'}>Know more</Link>
                  </Col>
                  <Link to={'/bursa-HNI'}>
                    <Button className='gradient-btn price-card-btn'>Subscribe Now</Button>
                  </Link>
                </Col>

                <Col className='price-card-section' lg={4} md={6}>
                  <Col className='price-card'>
                    <div className='price-card-Img text-center pb-3'>
                      <Image src={'./assets/images/pricing/fcpo.svg'} alt="Indices/ FCPO" />
                    </div>
                    <h3>FCPO</h3>
                    <ul className='product-desc-list price-card-content'>
                      <li><span> What: </span> Get Purely Intraday Customised HNI Warrant trades.</li>
                      <ul style={{ listStyle: 'outside' }}>
                        <li>Long term Strategy with Customised trades</li>
                        <li>No Hoding of trades</li>
                        <li>No Capital Stucked</li>
                        <li>Customised Project</li>
                        <li>Portfolio maintenance</li>
                      </ul>
                      <li><span> Portfolio maintenance </span> 50000RM -100000RM </li>
                    </ul>
                    <Link to={'/fcpo'}>Know more</Link>
                  </Col>
                  <Link to={'/fcpo'}>
                    <Button className='gradient-btn price-card-btn'>Subscribe Now</Button>
                  </Link>
                </Col> */}

              </Row>
            </TabPanel>


            <TabPanel value={value} index={1}>
              <Row className='price-cart-tab'>

                <Col className='price-card-section' lg={4} md={6}>
                  <Col className='price-card'>
                    <div className='price-card-Img text-center pb-3'>
                      <Image src={'./assets/images/pricing/forex-basic.svg'} alt="Forex Basic" />
                    </div>
                    <h3>Forex Basic</h3>
                    <ul className='product-desc-list price-card-content'>
                      <li><span> What: </span> Get Forex signals based on our time and tested research methodology.</li>
                      <li><span> Ideal For : </span> A trader who wants to book Profit Opportunities in Forex trades</li>
                      <li><span> Product Description: </span> Designed for Moderate Risk Appetite  to High Risk Appetite Customers, Intra/Contra/Swing, Proper Entry and Exit levels given with Stop Loss</li>
                      <li><span> Risk Suitability: </span> Medium- High</li>
                      <li><span> Minimum Capital:</span> 500 USD -10000 USD</li>
                    </ul>
                    <Link to={'/forex-basic'}>Know more</Link>
                  </Col>
                  <Link to={'/forex-basic'}>
                    <Button className='gradient-btn price-card-btn'>Subscribe Now</Button>
                  </Link>
                </Col>

                <Col className='price-card-section' lg={4} md={6}>
                  <Col className='price-card'>
                    <div className='price-card-Img text-center pb-3'>
                      <Image src={'./assets/images/pricing/forex-optimal.svg'} alt="Forex Optimal" />
                    </div>
                    <h3>Forex Optimal</h3>
                    <ul className='product-desc-list price-card-content'>
                      <li><span> Product Description: </span> Designed for High Risk Appetite Customers with high volume Intraday Forex signals.</li>
                      <li><span> Risk Suitability: </span> High</li>
                      <li><span>Minimum Capital:</span> 10000 USD TO 20000 USD</li>
                      <li><span> Analysis: </span> Technical and Fundamental analysis and Sentimental Analysis</li>
                      <li><span> Frequency: </span> Intraday with Proper Market Updates</li>
                    </ul>
                    <Link to={'/forex-optimal'}>Know more</Link>
                  </Col>
                  <Link to={'/forex-optimal'}>
                    <Button className='gradient-btn price-card-btn'>Subscribe Now</Button>
                  </Link>
                </Col>

                <Col className='price-card-section' lg={4} md={6}>
                  <Col className='price-card'>
                    <div className='price-card-Img text-center pb-3'>
                      <Image src={'./assets/images/pricing/forex-hni.svg'} alt="Forex HNI" />
                    </div>
                    <h3>Forex HNI</h3>
                    <ul className='product-desc-list price-card-content'>
                      <li><span> What: </span> Get Purely Intraday Customised HNI Forex signals.</li>
                      <ul style={{ listStyle: 'outside' }}>
                        <li>Day trade Strategy with Customised trades</li>
                        <li>No Hoding of trades</li>
                        <li>No Capital Stucked</li>
                        <li>Customised Project</li>
                        <li>Portfolio maintenance</li>
                      </ul>
                      <li><span> Minimum Capital: </span> 10000 USD & above </li>
                      <li><span> Analysis: </span> Technical and Fundamental analysis </li>
                      <li><span> Frequency: </span> Intra trades with Proper Market Updates</li>
                      <li><span> Communication : </span> Whatsapp, Calls and Mails</li>
                    </ul>
                    <Link to={'/forex-HNI'}>Know more</Link>
                  </Col>
                  <Link to={'/forex-HNI'}>
                    <Button className='gradient-btn price-card-btn'>Subscribe Now</Button>
                  </Link>
                </Col>

              </Row>
            </TabPanel>


            <TabPanel value={value} index={2}>
              <Row className='price-cart-tab justify-content-center'>

                <Col className='price-card-section' lg={4} md={6}>
                  <Col className='price-card'>
                    <div className='price-card-Img text-center pb-3'>
                      <Image src={'./assets/images/pricing/indices.svg'} alt="Indices/ FCPO" />
                    </div>
                    <h3>Indices</h3>
                    <ul className='product-desc-list price-card-content'>
                      <li><span> What: </span> Get Purely Intraday Customised HNI Warrant trades.</li>
                      <ul style={{ listStyle: 'outside' }}>
                        <li>Long term Strategy with Customised trades</li>
                        <li>No Hoding of trades</li>
                        <li>No Capital Stucked</li>
                        <li>Customised Project</li>
                        <li>Portfolio maintenance</li>
                      </ul>
                      <li><span> Portfolio maintenance </span> 50000RM -100000RM </li>
                    </ul>
                    <Link to={'/indices'}>Know more</Link>
                  </Col>
                  <Link to={'/indices'}>
                    <Button className='gradient-btn price-card-btn'>Subscribe Now</Button>
                  </Link>
                </Col>
                <Col className='price-card-section' lg={4} md={6}>
                  <Col className='price-card'>
                    <div className='price-card-Img text-center pb-3'>
                      <Image src={'./assets/images/pricing/asx.svg'} alt="Indices/ FCPO" />
                    </div>
                    <h3>Value Investment ASX</h3>
                    <ul className='product-desc-list price-card-content'>
                      <li><span> What: </span> Get Customised Value investing stocks (mid cap, blue chip, penny stocks) based on Short & Mid-term.</li>
                      <li><span> Ideal For : </span> A trader who wants to book Profit Opportunities in Short term to mid-term from ASX </li>
                      <li><span> Product Description:  </span> Designed for Moderate Risk Appetite to High Risk Appetite Customers, Value investing /Contra Proper Entry and Exit levels given with Stop Loss</li>
                      <li><span> Risk Suitability:  </span> Medium</li>
                    </ul>
                    <Link to={'/value-investment-asx'}>Know more</Link>
                  </Col>
                  <Link to={'/value-investment-asx'}>
                    <Button className='gradient-btn price-card-btn'>Subscribe Now</Button>
                  </Link>
                </Col>

              </Row>
            </TabPanel>
          </Box>
        </Col>
      </Container>
    </div>
  )
}
