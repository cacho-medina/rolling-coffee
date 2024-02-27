import "./App.css";
import NavBar from "./components/common/NavBar";
import Footer from "./components/common/Footer";
import Home from "./components/pages/Home";
import Admin from "./components/pages/Admin";
import Error from "./components/pages/Error";
import DetalleProducto from "./components/pages/producto/DetalleProducto";
import Formulario from "./components/pages/producto/crear/CrearProducto";
import Login from "./components/pages/Login/Login";
import Signup from "./components/pages/Login/Signup";
import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";

function App() {
    const { pathname } = useLocation();
    return (
        <>
            {pathname !== "/login" && pathname !== "/signup" ? <NavBar /> : ""}
            <Routes>
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/signup" element={<Signup />} />
                <Route exact path="/" element={<Home />} />
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
                <Route
                    exact
                    path="/producto/:id"
                    element={<DetalleProducto />}
                />
                <Route path="*" element={<Error />} />
            </Routes>
            {pathname !== "/login" && pathname !== "/signup" ? <Footer /> : ""}
        </>
    );
}

export default App;
