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

    const [logButtonName, setLogButtonName] = useState("Show Create Log Page");

    function logToggleView() {
        if (props.creatingABowlingLog === false) {
            props.setCreatingABowlingLog(true);
            setLogButtonName("Show Log History Page");
        } else {
            props.setCreatingABowlingLog(false);
            setLogButtonName("Show Create Log Page");
        }
    }
    
    return (
        <Navbar style={{backgroundColor:'lightgray', position: "sticky", top:"0"}}   light expand="md">
            <NavbarBrand href="/"><h1>Bowling Log</h1></NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        {props.token
                        ? <Button color="info" onClick={logToggleView}>{logButtonName}</Button>
                        : null}
                    </NavItem>
                    <NavItem>
                        {props.token 
                        ? <Button color="secondary" onClick={props.clickLogout}>Logout</Button>
                        : <Button color="info" onClick={toggleView}>{buttonName}</Button>}
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    )
}

export default Sitebar;