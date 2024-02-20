import Options from "../options/Options";

function ItemProd({ producto }) {
    const { id, nombre, precio, imagen, categoria } = producto;
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
                    <Options />
                </td>
            </tr>
        </>
    );
}

export default ItemProd;
