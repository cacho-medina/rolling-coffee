import { getProductoById } from "../../../helpers/queries";
import Card from "react-bootstrap/Card";
//import cafe from "../../../assets/cafe.jpg";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function DetalleProducto() {
    const { id } = useParams();
    const [prod, setProd] = useState({});
    const obtenerProd = async () => {
        const res = await getProductoById(id);
        if (res.status === 200) {
            const data = await res.json();
            setProd(data);
        } else {
            alert("Ocurrio un error al obtener el producto!");
        }
    };
    useEffect(() => {
        obtenerProd();
    }, []);
    return (
        <div className="grow container py-3">
            <Card className="flex-md-row">
                <div className="col col-md-6">
                    <Card.Img
                        src={prod.imagen}
                        className="max object-fit-cover"
                    />
                </div>
                <Card.Body className="col col-md-6">
                    <Card.Title className="display-6 fw-medium text-center">
                        {prod.nombre}
                    </Card.Title>
                    <hr />
                    <Card.Text>{prod.descAmplia}</Card.Text>
                    <Card.Text>
                        <span className="fw-bold">Categoria: </span>{" "}
                        {prod.categoria}
                        <br />
                        <span className="fw-bold">Precio: ${prod.precio}</span>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

export default DetalleProducto;
