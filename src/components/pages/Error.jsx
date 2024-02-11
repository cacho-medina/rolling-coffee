import Button from "react-bootstrap/Button";
import error from "../../assets/error404.png";

function Error() {
    return (
        <div className="d-flex flex-column align-items-center text-center grow py-1">
            <img src={error} alt="error 404" className="img-fluid" />
            {/* <h1>Ha ocurrido un error...</h1> */}
            <Button variant="success" className="px-3">
                Volver a inicio
            </Button>
        </div>
    );
}

export default Error;
