import React from 'react'

import Container from "react-bootstrap/Container"
import Navbar from "react-bootstrap/Navbar"

const Header = () => {
    return (
        <Container>
            <Navbar className="mt-2" expand="lg" variant="dark" bg="primary">
                <Container>
                    <Navbar.Brand href="#">User Information   </Navbar.Brand>
                </Container>
            </Navbar>
        </Container>
    )
}

export default Header