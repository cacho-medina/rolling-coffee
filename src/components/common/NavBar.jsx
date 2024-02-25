import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../assets/Coffee_Logo.png";
import { NavLink, Link } from "react-router-dom";

function NavBar() {
    return (
        <Navbar expand="md" bg="light" data-bs-theme="light">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <img src={logo} alt="logo Rolling Coffee" height="80" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto text-center align-items-center">
                        <NavLink end to="/" className="nav-link">
                            Inicio
                        </NavLink>
                        <NavLink end to="/administrador" className="nav-link">
                            Admin
                        </NavLink>
                        <NavLink end to="/signup" className="nav-link">
                            <span className="btn btn-outline-secondary">
                                Sign up
                            </span>
                        </NavLink>
                        <NavLink end to="/login" className="nav-link">
                            <span className="btn btn-secondary">Login</span>
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;
