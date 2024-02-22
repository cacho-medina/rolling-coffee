import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function CardProducto({ producto }) {
    const { nombre, precio, imagen, descBreve, id } = producto;
    return (
        <Card className="p-0 col-12 col-sm-5 col-lg-3 shadow">
            <Card.Img
                variant="top"
                src={imagen}
                className="img-fluid object-fit-cover"
            />
            <Card.Body>
                <Card.Title>{nombre}</Card.Title>
                <Card.Text>{descBreve}</Card.Text>
                <Card.Text className="fw-bold">Precio: ${precio}</Card.Text>
            </Card.Body>
            <Card.Footer className="d-flex justify-content-end">
                <Link to={`/producto/${id}`} className="btn btn-success">
                    Ver Mas
                </Link>
            </Card.Footer>
        </Card>
    );
}

export default CardProducto;
