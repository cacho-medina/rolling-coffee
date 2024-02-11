import Card from "react-bootstrap/Card";
import cafe from "../../../assets/cafe.jpg";
import { Link } from "react-router-dom";

function BasicExample() {
    return (
        <Card className="p-0 col-12 col-sm-5 col-lg-3 shadow">
            <Card.Img variant="top" src={cafe} />
            <Card.Body>
                <Card.Title>Cafe americano</Card.Title>
                <Card.Text>
                    Descripcion: Una taza de cafe suave y aromatico
                </Card.Text>
                <Card.Text className="fw-bold">Precio: $250</Card.Text>
            </Card.Body>
            <Card.Footer className="d-flex justify-content-end">
                <Link to="/producto/1" className="btn btn-success">
                    Ver Mas
                </Link>
            </Card.Footer>
        </Card>
    );
}

export default BasicExample;
