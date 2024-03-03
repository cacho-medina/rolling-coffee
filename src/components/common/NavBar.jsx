import { Container, Button } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../assets/Coffee_Logo.png";
import { NavLink, Link } from "react-router-dom";
import Swal from "sweetalert2";

function NavBar({ loggedUser, setUserLogged }) {
    const logout = () => {
        Swal.fire({
            title: "Estas seguro que deseas cerrar sesion?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Cerrar sesion",
        }).then((result) => {
            if (result.isConfirmed) {
                sessionStorage.removeItem("loginRC");
                setUserLogged("");
            }
        });
    };
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
                        {!loggedUser.length ? (
                            <>
                                <NavLink end to="/signup" className="nav-link">
                                    <span className="btn btn-outline-success">
                                        Sign up
                                    </span>
                                </NavLink>
                                <NavLink end to="/login" className="nav-link">
                                    <span className="btn btn-success">
                                        Login
                                    </span>
                                </NavLink>
                            </>
                        ) : (
                            <>
                                <NavLink
                                    end
                                    to="/administrador"
                                    className="nav-link"
                                >
                                    Admin
                                </NavLink>
                                <Button
                                    variant="outline-danger"
                                    className="mx-1"
                                    onClick={logout}
                                >
                                    Logout
                                </Button>
                            </>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;
