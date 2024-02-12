import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import Options from "./options/Options";
import { FiFilePlus } from "react-icons/fi";
import { Link } from "react-router-dom";

function Admin() {
    return (
        <Container className="grow">
            <div className="d-flex justify-content-between align-items-center">
                <h1 className="display-3 fw-medium">Productos Disponibles</h1>
                <Link
                    to="/administrador/crearProducto"
                    className="btn btn-primary"
                >
                    <FiFilePlus /> Agregar
                </Link>
            </div>
            <hr />
            <Table
                hover
                responsive
                className="shadow overflow-x-hidden align-middle text-center"
            >
                <thead className="table-success">
                    <tr>
                        <th>cod</th>
                        <th>Producto</th>
                        <th>Precio</th>
                        <th>Url</th>
                        <th>Categoria</th>
                        <th>Opciones</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>cod</td>
                        <td>1</td>
                        <td>$0</td>
                        <td>www.example.com</td>
                        <td>cafe</td>
                        <td>
                            <Options />
                        </td>
                    </tr>
                    <tr>
                        <td>cod</td>
                        <td>1</td>
                        <td>$0</td>
                        <td>www.example.com</td>
                        <td>cafe</td>
                        <td>
                            <Options />
                        </td>
                    </tr>
                </tbody>
            </Table>
        </Container>
    );
}

export default Admin;
