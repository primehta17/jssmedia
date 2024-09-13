import React, { useEffect } from 'react';
import ReactPixel from 'react-facebook-pixel';
import { Route, Routes } from "react-router-dom";

import Layout from './Components/Items/Layout';
import Layout2 from './Components/Items/Layout2';
import Home from './Components/Home';
import Error404 from './Components/Error404';
import Signup from './Signup';

// products routing
import PhotoEditing from './Components/Products/PhotoEditing';
import VideoEditing from './Components/Products/VideoEditing';
import BrandPromotion from './Components/Products/BrandPromotion';
import ReelPromotion from './Components/Products/ReelPromotion';

import AboutUsPage from './Components/MorePages/AboutUsPage';
import ProfilePage from './Components/MorePages/ProfilePage';
import ForgotPassword from './Components/MorePages/ForgotPassword';
import RefundPolicy from './Components/MorePages/RefundPolicy';
import Disclaimer from './Components/MorePages/Disclaimer';
import PrivacyPolicy from './Components/MorePages/PrivacyPolicy';
import TermsCondition from './Components/MorePages/TermsCondition';
import SupportGrievance from './Components/MorePages/SupportGrievance';
import Suggestion from './Components/MorePages/Suggestion'
import Payment from './Components/MorePages/Payment';
import LoginFirst from './Components/LoginFirst';
import ThankYou from './Components/ThankYou';

function App() {

  useEffect(() => {
    ReactPixel.init('1707723086412136'); // Initialize the Facebook Pixel with your Pixel ID
    ReactPixel.pageView(); // Track a page view event
  }, []);

  return (
    <>
      <Routes>
        <Route exact path={'/'} element={<Layout><Home /></Layout>} />
        <Route exact path={'/about-us'} element={<Layout2><AboutUsPage /></Layout2>} />
        {/* <Route exact path="/profile/:email" element={<Layout2><ProfilePage /></Layout2>} /> */}
        <Route exact path="/profile" element={<Layout2><ProfilePage /></Layout2>} />
        <Route exact path="/forgot-password" element={<Layout2><ForgotPassword /></Layout2>} />

        {/* service pages */}
        <Route exact path={'/photo-editing'} element={<Layout2><PhotoEditing /></Layout2>} />
        <Route exact path={'/video-editing'} element={<Layout2><VideoEditing /></Layout2>} />
        <Route exact path={'/brand-promotion'} element={<Layout2><BrandPromotion /></Layout2>} />
        <Route exact path={'/reel-promotion'} element={<Layout2><ReelPromotion /></Layout2>} />

        {/* more pages */}
        <Route exact path={'/refund-policy'} element={<Layout2><RefundPolicy /></Layout2>} />
        <Route exact path={'/disclaimer'} element={<Layout2><Disclaimer /></Layout2>} />
        <Route exact path={'/privacy-policy'} element={<Layout2><PrivacyPolicy /></Layout2>} />
        <Route exact path={'/terms-condition'} element={<Layout2><TermsCondition /></Layout2>} />
        <Route exact path={'/support-grievance'} element={<Layout2><SupportGrievance /></Layout2>} />

        <Route exact path={'/suggestion'} element={<Layout2><Suggestion /></Layout2>} />
        <Route exact path={'/payment'} element={<Layout2><Payment /></Layout2>} />
        <Route path={'/thank-you'} element={<ThankYou />} />
        <Route path={'/first-login'} element={<LoginFirst />} />
        <Route path={'/*'} element={<Error404 />} />
        <Route path={'/signup'} element={<Layout2><Signup /></Layout2>}></Route>
      </Routes>
    </>
  );
}

export default App;
