import React, { useEffect } from 'react'
import MainBanner from './Sections/MainBanner'
import About from './Sections/About'
import Pricing from './Sections/Pricing'
import Contact from './Sections/Contact'
import FAQs from './Items/FAQs'


export default function Home() {

  useEffect(() => {
    document.title = 'JSS Media Consultancy'
    document.getElementsByTagName('meta')["description"].content = "Welcome to JSS Media Consultancy, where we provide expert guidance and solutions for all your media needs.";
  }, []);

  return (
    <div style={{ width: "99%" }}>
      <MainBanner />
      <About />
      <Pricing />
      <Contact />
      <FAQs />
    </div >
  )
}
