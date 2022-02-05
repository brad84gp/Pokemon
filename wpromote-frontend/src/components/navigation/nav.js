
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

import { Navbar, NavbarBrand, NavbarToggler, Collapse, 
    Nav, NavItem, NavLink, UncontrolledDropdown,
    DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap";


import PokemoneContext from "../../context/context";


    
const NavBar = () => {

    const { appState, setAppState } = React.useContext(PokemoneContext)

    const navigate = useNavigate()

    const [isOpen, setIsOpen] = useState(false)

    useEffect(() =>{

    }, [appState])

    function logout(){
        localStorage.clear()
        setAppState({
            "loggedIn" : false,
            "userData" : {}
        })
        navigate("/")
    }
    
    if(!appState.loggedIn){
        return (
            <div>
                <Navbar
                    color="dark"
                    expand="md"
                    style={{paddingLeft : '5%'}}
                >
                    <NavbarBrand href="/">
                    PokeStats
                    </NavbarBrand>
                    <NavbarToggler onClick={() => {setIsOpen=(!isOpen)} }/>
                    <Collapse isOpen={isOpen} navbar>
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
    }else{
        return (
            <div>
                <Navbar
                    color="dark"
                    expand="md"
                    style={{paddingLeft : '5%'}}
                >
                    <NavbarBrand href="/">
                    PokeStats
                    </NavbarBrand>
                    <Nav
                        className="me-auto"
                        navbar
                    >
                    <UncontrolledDropdown
                        inNavbar
                        nav
                        style={{position : 'absolute', right : 0, top : '10%', paddingRight : '5%'}}
                        >
                        <DropdownToggle
                            caret
                            nav
                        >
                            Options
                        </DropdownToggle>
                        <DropdownMenu top>
                            <DropdownItem href="/">
                             Home
                            </DropdownItem>
                            <DropdownItem href="/profile">
                            Profile
                            </DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem onClick={logout}>
                            Logout
                            </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                    </Nav>
                </Navbar>
            </div>
        )
    }
}

export default NavBar