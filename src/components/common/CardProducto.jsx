import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function BasicExample() {
    return (
        <Card className="p-0 col-12 col-md-4">
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>Cafe americano</Card.Title>
                <Card.Text>
                    Descripcion: Una taza de cafe suave y aromatico
                </Card.Text>
                <Card.Text className="fw-bold">Precio: $250</Card.Text>
            </Card.Body>
            <Card.Footer className="d-flex justify-content-end">
                <Button variant="success">Ver Mas</Button>
            </Card.Footer>
        </Card>
    );
}

export default BasicExample;
