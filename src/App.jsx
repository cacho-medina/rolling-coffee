import "./App.css";
import NavBar from "./components/common/NavBar";
import Footer from "./components/common/Footer";
import Home from "./components/pages/Home";
import Admin from "./components/pages/Admin";
import Error from "./components/pages/Error";
import DetalleProducto from "./components/pages/producto/detalleProducto";
import Formulario from "./components/pages/producto/crear/CrearProducto";
import { Routes, Route } from "react-router-dom";

function App() {
    return (
        <>
            <NavBar />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/administrador" element={<Admin />} />
                <Route
                    exact
                    path="/administrador/crearProducto"
                    element={<Formulario />}
                />
                <Route
                    exact
                    path="/administrador/editarProducto/:id"
                    element={<Formulario />}
                />
                <Route
                    exact
                    path="/producto/:id"
                    element={<DetalleProducto />}
                />
                <Route path="*" element={<Error />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
