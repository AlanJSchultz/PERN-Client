// jshint esversion:6

import React, { useState } from 'react';
import { Navbar, NavbarBrand, Collapse, NavbarToggler, Nav, NavItem, Button } from 'reactstrap';

const Sitebar = (props) => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        let newIsOpen = !isOpen;
        setIsOpen(newIsOpen);
    };

    const [buttonName, setButtonName] = useState("Show Signup Page");

    function toggleView() {
        if (props.showLogin === true) {
            props.setShowLogin(false);
            setButtonName("Show Login Page");
        } else {
            props.setShowLogin(true);
            setButtonName("Show Signup Page");
        }
    }
    
    return (
        <Navbar style={{backgroundColor:'lightgray'}}  light expand="md">
            <NavbarBrand href="/"><h1>Bowling Log</h1></NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        {props.token 
                        ? <Button onClick={props.clickLogout}>Logout</Button>
                        : <Button onClick={toggleView}>{buttonName}</Button>}
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    )
}

export default Sitebar;