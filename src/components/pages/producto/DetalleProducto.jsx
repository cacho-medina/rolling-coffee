import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import cafe from "../../../assets/cafe.jpg";

function DetalleProducto() {
    return (
        <div className="grow container py-3">
            <Card className="flex-md-row">
                <div className="col col-md-6">
                    <Card.Img
                        src={cafe}
                        className="w-100 h-100 object-fit-cover"
                    />
                </div>
                <Card.Body className="col col-md-6">
                    <Card.Title className="display-6 fw-medium text-center">
                        Card Title
                    </Card.Title>
                    <hr />
                    <Card.Text>
                        This library embraces uncontrolled components and native
                        HTML inputs. However, it s hard to avoid working with
                        external controlled components such as React-Select,
                        AntD and MUI. To make this simple, we provide a wrapper
                        component, Controller, to streamline the integration
                        process while still giving you the freedom to use a
                        custom register.
                    </Card.Text>
                    <Card.Text>
                        <span className="fw-bold">Categoria: </span> Infusiones{" "}
                        <br />
                        <span className="fw-bold">Precio: $1000</span>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

export default DetalleProducto;
