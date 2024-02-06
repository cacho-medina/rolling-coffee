import CardProducto from "../common/CardProducto";

function Productos() {
    return (
        <div className="py-3">
            <h2 className="display-2 text-center">Nuestros Productos</h2>
            <div className="container-fluid">
                <div className="row">
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
