import React, { useState, useEffect } from "react";
import { ClickAwayListener } from "@mui/material";
import { Container, Nav, Navbar, Image, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ContactUsPopup from "../Forms/Login";

const navLinks = [
  { id: "home", label: "Home" },
  { id: "about-us", label: "About Us" },
  { id: "price", label: "Products" },
  { id: "blog", label: "Blog" },
  // { id: "contact", label: "CONTACT" }
];

export default function Header2() {
  const [isHeaderSticky, setIsHeaderSticky] = useState(true);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsHeaderSticky(window.pageYOffset <= 0);

      const fromTop = window.scrollY;
      const sectionIds = navLinks.map((link) => link.id);

      // Find the section currently in view
      const currentSection = sectionIds.find((sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
          const { offsetTop, offsetHeight } = section;
          return fromTop >= offsetTop - 1 && fromTop < offsetTop + offsetHeight;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "auto" });
    }
    setMenuOpen(false);
  };

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleClickAway = () => {
    setMenuOpen(false);
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <div>
        <Navbar sticky={isHeaderSticky ? "top" : ""} className={`header ${!isHeaderSticky ? "position-fixed w-100" : ""}`} bg="#FFFFFF" expand="lg">
          <Container className="hide-section-mobile">
            <Link className="navbar-brand" to="/">
              <Image src="./jsslogo.jpeg" alt='Logical Fund' />
            </Link>
            {/* <Nav className="mobileShow">
            <Link className='nav-logIn'>Login</Link>
          </Nav> */}
            {/* <Navbar.Toggle aria-controls="navbarScroll" /> */}

            <Navbar.Collapse id="navbarScroll">

            </Navbar.Collapse>
            {/* className="pcShow" */}
            <Nav className='nav-logIn-section'>
              <ContactUsPopup />
            </Nav>
            <Nav className="hamburger-menu">
              <input
                id="menu-toggle"
                type="checkbox"
                checked={menuOpen}
                onChange={toggleMenu}
              />
              <label htmlFor="menu-toggle">
                <span></span>
                <span></span>
                <span></span>
              </label>
              <ul style={{ top: '90px' }} className={`menu ${menuOpen ? 'open' : ''}`}>
                <li>
                  {/* {navLinks.map(({ id, label }) => (
                <Nav.Link
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={activeSection === id ? "active" : ""}
                >
                  {label}
                </Nav.Link>
              ))} */}
                  <Nav className="m-auto" style={{ maxHeight: 'auto' }} navbarScroll>
                    <Nav.Link>
                      <Link onClick={() => toggleMenu()} to={'/'} className="dropdown-link">Home</Link>
                    </Nav.Link>
                    <Nav.Link>
                      <Link onClick={() => toggleMenu()} to={'/about-us'} className="dropdown-link">About Us</Link>
                    </Nav.Link>
                    <Nav.Link>
                      <Link onClick={() => toggleMenu()} to={'/suggestion'} className="dropdown-link">Suggestion</Link>
                    </Nav.Link>
                    <Nav.Link>
                      <Link onClick={() => toggleMenu()} to={'/payment'} className="dropdown-link">Payment</Link>
                    </Nav.Link>
                    <Nav.Link>
                      <Link onClick={() => toggleMenu()} to={'/support-grievance'} className="dropdown-link">Support/Grievance</Link>
                    </Nav.Link>
                  </Nav>
                </li>
              </ul>
            </Nav>
          </Container>
        </Navbar>
      </div>
    </ClickAwayListener>
  );
}
