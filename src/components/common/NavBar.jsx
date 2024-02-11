import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../assets/Coffee_Logo.png";

function NavBar() {
    return (
        <Navbar expand="md" bg="light" data-bs-theme="light">
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logo} alt="logo Rolling Coffee" height="80" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto text-center align-items-center">
                        <Nav.Link href="#home">Inicio</Nav.Link>
                        <Nav.Link href="#features">Admin</Nav.Link>
                        <Nav.Link href="#pricing">
                            <span className="btn btn-outline-secondary">
                                Sign up
                            </span>
                        </Nav.Link>
                        <Nav.Link href="#pricing">
                            <span className="btn btn-secondary">Login</span>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;
