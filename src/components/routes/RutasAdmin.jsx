import Formulario from "../pages/producto/crear/CrearProducto";
import Admin from "../pages/Admin";
import { Route, Routes } from "react-router";

function RutasAdmin() {
    return (
        <>
            <Routes>
                <Route exact path="/" element={<Admin />} />
                <Route
                    exact
                    path="/crearProducto"
                    element={
                        <Formulario editar={false} title="Nuevo Producto" />
                    }
                />
                <Route
                    exact
                    path="/editarProducto/:id"
                    element={
                        <Formulario editar={true} title="Editar Producto" />
                    }
                />
            </Routes>
        </>
    );
}

export default RutasAdmin;
