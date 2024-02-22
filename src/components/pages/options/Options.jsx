import Button from "react-bootstrap/Button";
import { FaTrash } from "react-icons/fa";
import { HiMiniPencilSquare } from "react-icons/hi2";

function Options({deleteProducto}) {
    return (
        <>
            <Button variant="warning">
                <HiMiniPencilSquare />
            </Button>
            <Button variant="danger" onClick={deleteProducto}>
                <FaTrash />
            </Button>
        </>
    );
}

export default Options;
