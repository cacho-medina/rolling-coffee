import Options from "../options/Options";
import { deleteProductos } from "../../../helpers/queries";
import Swal from "sweetalert2";

function ItemProd({ producto }) {
    const { id, nombre, precio, imagen, categoria } = producto;

    const deleteProducto = () => {
        Swal.fire({
            title: "Estas seguro de eliminar el producto?",
            text: "Una vez hecho esto no se puede recuperar!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Eliminar",
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Producto eliminado!",
                    text: `El producto "${nombre}" fue eliminado correctamente`,
                    icon: "success",
                });
            }
        });
    };

    return (
        <>
            <tr>
                <td>{id}</td>
                <td>{nombre}</td>
                <td>${precio}</td>
                <td className="text-truncate" style={{ maxWidth: 150 }}>
                    {imagen}
                </td>
                <td>{categoria}</td>
                <td className="d-flex align-items-center justify-content-center gap-1">
                    <Options deleteProducto={deleteProducto} />
                </td>
            </tr>
        </>
    );
}

export default ItemProd;
