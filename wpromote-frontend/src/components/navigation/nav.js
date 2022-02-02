
import React from "react";
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink } from "reactstrap";

const NavBar = () => {


    return (
        <div>
            <Navbar
                color="dark"
                expand="md"
                style={{paddingLeft : '5%'}}
            >
                <NavbarBrand href="/">
                reactstrap
                </NavbarBrand>
                <NavbarToggler onClick={function noRefCheck(){}} />
                <Collapse navbar>
                <Nav
                    className="me-auto"
                    navbar
                >
                    <NavItem style={{position : 'absolute', right : 0, top : '10%', paddingRight : '5%'}}>
                    <NavLink href="/login_register">
                        Login/Register
                    </NavLink>
                    </NavItem>
                    
                </Nav>
                </Collapse>
            </Navbar>
            </div>
    )
}

export default NavBar