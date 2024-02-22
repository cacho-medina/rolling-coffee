import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import ItemProd from "./producto/ItemProd";
import { FiFilePlus } from "react-icons/fi";
import { Link } from "react-router-dom";
import { getProductos } from "../../helpers/queries";
import { useState, useEffect } from "react";

function Admin() {
    const [productos, setProductos] = useState([]);
    const obtenerProd = async () => {
        const res = await getProductos();
        if (res.status === 200) {
            const data = await res.json();
            setProductos(data);
        }
    };
    useEffect(() => {
        obtenerProd();
    }, []);
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
                    {productos?.map((item) => {
                        return (
                            <ItemProd
                                producto={item}
                                key={item.id}
                                setProductos={setProductos}
                            />
                        );
                    })}
                </tbody>
            </Table>
        </Container>
    );
}

export default Admin;
