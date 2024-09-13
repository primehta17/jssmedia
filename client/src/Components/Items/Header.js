import React, { useState, useEffect } from "react";
import { ClickAwayListener } from "@mui/material";
import { Container, Nav, Navbar, Image, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ContactUsPopup from "../Forms/ContactUsPopup";
import Login from "../Forms/Login";


const navLinks = [
  { id: "home", label: "Home" },
  { id: "about-us", label: "About Us" },
  { id: "price", label: "Services" },
  { id: "contact", label: "CONTACT" },
  // { id: "blog", label: "Blog" },
  // { id: "contact", label: "CONTACT" }
];

export default function Header() {
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
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <div>
        <Navbar sticky={isHeaderSticky ? "top" : ""} className={`header ${!isHeaderSticky ? "position-fixed w-100" : ""}`} bg="#FFFFFF" expand="lg">
          <Container className="hide-section-mobile">
            <Link className="navbar-brand" to="/">
              <Image src="./jsslogo.jpeg" alt='Jss Media Consultancy' />
            </Link>

            <Navbar.Collapse id="navbarScroll">
              <Nav className="m-auto" style={{ maxHeight: '100px' }} navbarScroll>
                {navLinks.map(({ id, label }) => (
                  <Nav.Link
                    key={id}
                    onClick={() => scrollToSection(id)}
                    className={activeSection === id ? "active" : ""}
                  >
                    {label}
                  </Nav.Link>
                ))}
              </Nav>
            </Navbar.Collapse>
            {/* className="pcShow" */}
            <Nav className='nav-logIn-section'>
              <Login />
              {/* <Avatar /> */}
            </Nav>
            {/* <Nav className='nav-logIn-section'>
              {isLoggedIn ? <Avatar /> : <Login onLogin={() => setIsLoggedIn(true)} />}
            </Nav> */}
            {/* <Nav className='nav-logIn-section'>
              <ContactUsPopup />
            </Nav> */}
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
              <ul className={`menu ${menuOpen ? 'open' : ''}`}>
                <li>
                  {navLinks.map(({ id, label }) => (
                    <Nav.Link
                      key={id}
                      onClick={() => scrollToSection(id)}
                      className={activeSection === id ? "active" : ""}
                    >
                      {label}
                    </Nav.Link>
                  ))}
                  {/* <NavDropdown title="More" id="basic-nav-dropdown">
                    <NavDropdown.Item>
                      <Link onClick={() => toggleMenu()} to={'/kyc'} className="dropdown-link">KYC</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <Link onClick={() => toggleMenu()} to={'/rpm'} className="dropdown-link">RPM</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <Link onClick={() => toggleMenu()} to={'/suggestion'} className="dropdown-link">Suggestion</Link>
                    </NavDropdown.Item>
                  </NavDropdown> */}
                </li>
              </ul>
            </Nav>

          </Container>
        </Navbar>
      </div>
    </ClickAwayListener>
  );
}
