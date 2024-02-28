import CardProducto from "./CardProducto";
import { getProductos } from "../../../helpers/queries";
import { useState, useEffect } from "react";

function Productos() {
    const [productos, setProductos] = useState([]);
    const obtenerProd = async () => {
        const res = await getProductos();
        if (res.status === 200) {
            const data = await res.json();
            setProductos(data);
        }
    };
    useEffect(() => {
        obtenerProd();
    }, []);
    return (
        <div className="py-3">
            <h2 className="display-2 text-center">Nuestros Productos</h2>
            <hr />
            <div className="container-fluid">
                <div className="row justify-content-center align-items-center gap-3 px-2">
                    {!productos.length ? (
                        <p className="text-center display-6 text-danger">
                            No hay productos
                        </p>
                    ) : (
                        productos?.map((item) => (
                            <CardProducto producto={item} key={item.id} />
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}

export default Productos;
