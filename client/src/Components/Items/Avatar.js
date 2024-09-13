import React from 'react';
import { NavDropdown } from 'react-bootstrap';
import { CiUser } from "react-icons/ci";
import { Link } from 'react-router-dom';

const Avatar = ({ user }) => {
  return (
    <NavDropdown title={<div className="avatar-circle"><CiUser /></div>} id="avatar-dropdown">
      <NavDropdown.Item><Link to={'/profile'}>Profile</Link></NavDropdown.Item>
      <NavDropdown.Item>History</NavDropdown.Item>
      <NavDropdown.Divider />
      <NavDropdown.Item>Sign Out</NavDropdown.Item>
    </NavDropdown>
  );
};

export default Avatar;
