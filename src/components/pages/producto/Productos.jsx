import CardProducto from "./CardProducto";

function Productos() {
    return (
        <div className="py-3">
            <h2 className="display-2 text-center">Nuestros Productos</h2>
            <hr />
            <div className="container-fluid">
                <div className="row justify-content-center align-items-center gap-2 px-2">
                    <CardProducto></CardProducto>
                    <CardProducto></CardProducto>
                    <CardProducto></CardProducto>
                    <CardProducto></CardProducto>
                    <CardProducto></CardProducto>
                </div>
            </div>
        </div>
    );
}

export default Productos;
