import error from "../../assets/error404.png";
import { Link } from "react-router-dom";

function Error() {
    return (
        <div className="d-flex flex-column align-items-center text-center grow py-1">
            <img src={error} alt="error 404" className="img-fluid" />
            <Link to="/" className="btn btn-success px-3">
                Volver a Inicio...
            </Link>
        </div>
    );
}

export default Error;
