import { Route, Routes } from "react-router";
function RutasAdmin() {
    return (
        <>
            <Routes>
                <Route exact path="/administrador" element={<Admin />} />
                <Route
                    exact
                    path="/administrador/crearProducto"
                    element={
                        <Formulario editar={false} title="Nuevo Producto" />
                    }
                />
                <Route
                    exact
                    path="/administrador/editarProducto/:id"
                    element={
                        <Formulario editar={true} title="Editar Producto" />
                    }
                />
            </Routes>
        </>
    );
}

export default RutasAdmin;
