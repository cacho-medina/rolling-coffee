import { Container, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

function Signup() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
    } = useForm();
    return (
        <Container fluid className="grow grid px-1">
            <Form className="min shadow d-flex flex-column text-center justify-content-around gap-2 p-2 p-sm-3 my-2 px-lg-5 py-lg-3 border border-success rounded">
                <h1 className="display-1 fw-medium">Bienvenido</h1>
                <p className="fs-5">Registrate como nuevo usuario</p>
                <Form.Group>
                    <Form.Label>nombre</Form.Label>
                    <Form.Control></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>nombre de usuario</Form.Label>
                    <Form.Control></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>correo electronico</Form.Label>
                    <Form.Control></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>contraseña</Form.Label>
                    <Form.Control></Form.Control>
                </Form.Group>
                <Button variant="success" className="align-self-stretch mt-3">
                    Registrar
                </Button>
                <p>
                    Ya tienes cuenta?{" "}
                    <Link className="text-light-green" to="/login">
                        Inicia sesion
                    </Link>
                </p>
            </Form>
        </Container>
    );
}

export default Signup;
