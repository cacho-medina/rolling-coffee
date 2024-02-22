import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import { crear } from "../../../../helpers/queries";
import Swal from "sweetalert2";

function CrearProducto({ editar, title }) {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();
    const onSubmit = async (data) => {
        if (editar) {
            //EDITANDO
        } else {
            const res = await crear(data);
            if (res.status !== 201) {
                Swal.fire({
                    title: "Error",
                    text: "Algo salio mal!",
                    icon: "error",
                });
            } else {
                Swal.fire({
                    title: "Listo!",
                    text: "Producto agregado con exito!",
                    icon: "success",
                });
                reset();
            }
        }
    };

    return (
        <Container className="grow py-4">
            <h1 className="display-2 text-center">{title}</h1>
            <hr />
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3" controlId="nombre">
                    <Form.Label>Producto*</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Ej: Cafe"
                        name="nombre"
                        {...register("nombre", {
                            required: "ingrese un nombre",
                            minLength: {
                                value: 3,
                                message:
                                    "Debe ingresar como minimo 2 caracteres",
                            },
                            maxLength: {
                                value: 40,
                                message:
                                    "Debe ingresar como maximo 40 caracteres",
                            },
                        })}
                    />
                    {errors.nombre && (
                        <Form.Text className="text-danger">
                            {errors.nombre.message}
                        </Form.Text>
                    )}
                </Form.Group>
                <Form.Group className="mb-3" controlId="precio">
                    <Form.Label>Precio*</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="Ej: 50"
                        name="precio"
                        {...register("precio", {
                            required: "ingrese un valor",
                            min: {
                                value: 100,
                                message: "El precio debe ser mayor a 100",
                            },
                        })}
                    />
                    {errors.precio && (
                        <Form.Text className="text-danger">
                            {errors.precio.message}
                        </Form.Text>
                    )}
                </Form.Group>
                <Form.Group className="mb-3" controlId="url">
                    <Form.Label>Imagen URL*</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Ej: https://www.pexels.com/es-es/imagen.png"
                        name="url"
                        {...register("imagen", {
                            required: "ingrese una url de imagen",
                            pattern: {
                                value: /(http)?s?:?(\/\/[^"']*\.(?:png|jpg|jpeg|gif|png|svg))/i,
                                message: "ingrese una url válida",
                            },
                        })}
                    />
                    {errors.imagen && (
                        <Form.Text className="text-danger">
                            {errors.imagen.message}
                        </Form.Text>
                    )}
                </Form.Group>
                <Form.Group className="mb-3" controlId="categoria">
                    <Form.Label>Categoria*</Form.Label>
                    <Form.Select
                        {...register("categoria", {
                            required: "Seleccione una categoria",
                        })}
                    >
                        <option value="">Seleccione una opcion</option>
                        <option value="infusiones">Infusiones</option>
                        <option value="batidos">Batidos</option>
                        <option value="dulce">Dulce</option>
                        <option value="salado">Salado</option>
                    </Form.Select>
                    {errors.categoria && (
                        <Form.Text className="text-danger">
                            {errors.categoria.message}
                        </Form.Text>
                    )}
                </Form.Group>
                <Form.Group className="mb-3" controlId="desc-breve">
                    <Form.Label>Descripcion breve*</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Ej: Una taza de cafe suave y aromatico."
                        name="desc-breve"
                        {...register("descBreve", {
                            required: "ingrese una breve descripcion",
                            minLength: {
                                value: 10,
                                message:
                                    "Debe ingresar como minimo 10 caracteres",
                            },
                            maxLength: {
                                value: 100,
                                message:
                                    "Debe ingresar como maximo 100 caracteres",
                            },
                        })}
                    />
                    {errors.descBreve && (
                        <Form.Text className="text-danger">
                            {errors.descBreve.message}
                        </Form.Text>
                    )}
                </Form.Group>
                <Form.Group className="mb-3" controlId="desc-amplia">
                    <Form.Label>Descripcion Amplia*</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Ej: El cafe americano es una bebida caliente que consiste en un expresso diluido con agua caliente, lo que resulta en una taza de cafe suave y aromatico. Es una opcion popular para aquellos que prefieren un cafe menos..."
                        name="desc-amplia"
                        {...register("descAmplia", {
                            required: "ingrese una descripcion detallada",
                            minLength: {
                                value: 30,
                                message:
                                    "Debe ingresar como minimo 30 caracteres",
                            },
                            maxLength: {
                                value: 400,
                                message:
                                    "Debe ingresar como maximo 400 caracteres",
                            },
                        })}
                    />
                    {errors.descAmplia && (
                        <Form.Text className="text-danger">
                            {errors.descAmplia.message}
                        </Form.Text>
                    )}
                </Form.Group>
                <Button variant="success" type="submit">
                    Guardar
                </Button>
            </Form>
        </Container>
    );
}

export default CrearProducto;
