import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import imgProfile from '../Assets/Images/noprofile.png';

const ProfileMenu = ({ isAuth }) => {
const [dropdownOpen, setDropdownOpen] = useState(false); 

const toggle = () => setDropdownOpen(prevState => !prevState);

if (isAuth) {
    return null;
} else {
    return (
        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle caret>
            <img src={imgProfile} />
        </DropdownToggle>
        <DropdownMenu>
            <DropdownItem header>Username</DropdownItem>
            <Link><DropdownItem>Profile</DropdownItem></Link>
            <Link><DropdownItem>Settings</DropdownItem></Link>
            <DropdownItem>Help</DropdownItem>
            <DropdownItem divider />
            <DropdownItem toggle={toggle}>Sign Out</DropdownItem>
        </DropdownMenu>
        </Dropdown>
    );
}
}
  
const mapStateToProps = state => {
    return {
        isAuth: state.loginPage.isAuth
    };
};

export default connect(mapStateToProps)(ProfileMenu);