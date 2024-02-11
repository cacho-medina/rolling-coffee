import Button from "react-bootstrap/Button";
import { FaTrash } from "react-icons/fa";
import { HiMiniPencilSquare } from "react-icons/hi2";

function Options() {
    return (
        <>
            <Button variant="warning">
                <HiMiniPencilSquare />
            </Button>
            <Button variant="danger">
                <FaTrash />
            </Button>
        </>
    );
}

export default Options;
