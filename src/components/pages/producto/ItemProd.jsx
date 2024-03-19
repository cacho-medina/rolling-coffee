import Options from "../options/Options";
import { deleteProductos, getProductos } from "../../../helpers/queries";
import Swal from "sweetalert2";

function ItemProd({ producto, setProductos }) {
    const { _id, nombre, precio, imagen, categoria } = producto;
    const deleteProducto = () => {
        Swal.fire({
            title: "Estas seguro de eliminar el producto?",
            text: "Una vez hecho esto no se puede recuperar!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Eliminar",
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await deleteProductos(_id);
                if (res.status === 200) {
                    Swal.fire({
                        title: "Producto eliminado!",
                        text: `El producto "${nombre}" fue eliminado correctamente`,
                        icon: "success",
                    });
                    const res = await getProductos();
                    if (res.status === 200) {
                        const data = await res.json();
                        setProductos(data);
                    }
                } else {
                    Swal.fire({
                        title: "ERROR!",
                        text: `El producto "${nombre}" no se pudo eliminar`,
                        icon: "error",
                    });
                }
            }
        });
    };

    return (
        <>
            <tr>
                <td>{_id}</td>
                <td>{nombre}</td>
                <td>${precio}</td>
                <td className="text-truncate" style={{ maxWidth: 150 }}>
                    {imagen}
                </td>
                <td>{categoria}</td>
                <td className="d-flex align-items-center justify-content-center gap-1">
                    <Options deleteProducto={deleteProducto} id={_id} />
                </td>
            </tr>
        </>
    );
}

export default ItemProd;
