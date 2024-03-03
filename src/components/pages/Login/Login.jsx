import { Container, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { iniciarSesion } from "../../../helpers/queries";
import Swal from "sweetalert2";

function Login({ setUserLogged }) {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        if (iniciarSesion(data)) {
            Swal.fire({
                title: "Bienvenido",
                text: `Ingresaste al sistema rollingCoffee`,
                icon: "success",
            });
            setUserLogged(data.email);
            navigate("/administrador");
        } else {
            Swal.fire({
                title: "Error!",
                text: "Usuario no encontrado",
                icon: "error",
            });
        }
    };
    return (
        <Container fluid className="grow grid px-2">
            <Form
                className="min mx-auto shadow d-flex flex-column text-center justify-content-around gap-2 border border-success rounded py-4 py-md-4 px-2 p-sm-3 px-md-5"
                onSubmit={handleSubmit(onSubmit)}
            >
                <h1 className="display-1 fw-medium">Bienvenido</h1>
                <p className="fs-5">Inicia sesion con tu cuenta</p>
                <Form.Group controlId="email">
                    <Form.Label>correo electronico</Form.Label>
                    <Form.Control
                        type="email"
                        {...register("email", {
                            required: "ingrese su correo electronico",
                        })}
                    ></Form.Control>
                    {errors.email && (
                        <Form.Text className="text-danger">
                            {errors.email.message}
                        </Form.Text>
                    )}
                </Form.Group>
                <Form.Group controlId="password">
                    <Form.Label>contraseña</Form.Label>
                    <Form.Control
                        /* type="password" */
                        {...register("password", {
                            required: "ingrese su contraseña",
                            min: {
                                value: 8,
                                message: "Ingrese como minimo 8 caracteres",
                            },
                        })}
                    ></Form.Control>
                    {errors.password && (
                        <Form.Text className="text-danger">
                            {errors.password.message}
                        </Form.Text>
                    )}
                </Form.Group>
                <Button
                    variant="success"
                    className="align-self-stretch mt-3"
                    type="submit"
                >
                    Ingresar
                </Button>
                <p>
                    Sos nuevo por aca?{" "}
                    <Link className="text-light-green" to="/signup">
                        Registrate
                    </Link>
                </p>
            </Form>
        </Container>
    );
}

export default Login;
