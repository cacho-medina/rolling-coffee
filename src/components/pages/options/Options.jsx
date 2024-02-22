import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import { HiMiniPencilSquare } from "react-icons/hi2";

function Options({ deleteProducto, id }) {
    return (
        <>
            <Link
                className="btn btn-warning"
                to={`/administrador/editarProducto/${id}`}
            >
                <HiMiniPencilSquare />
            </Link>
            <Button variant="danger" onClick={deleteProducto}>
                <FaTrash />
            </Button>
        </>
    );
}

export default Options;
