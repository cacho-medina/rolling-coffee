import "./App.css";
import NavBar from "./components/common/NavBar";
import Footer from "./components/common/Footer";
import Home from "./components/pages/Home";
import Error from "./components/pages/Error";
import DetalleProducto from "./components/pages/producto/DetalleProducto";
import Login from "./components/pages/Login/Login";
import Signup from "./components/pages/Login/Signup";
import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import RutasProtegidas from "./components/routes/RutasProtegidas";
import RutasAdmin from "./components/routes/RutasAdmin";
import { useState } from "react";

function App() {
    const { pathname } = useLocation();
    const usuario = JSON.parse(sessionStorage.getItem("loginRC")) || "";
    const [loggedUser, setUserLogged] = useState(usuario);
    return (
        <>
            {pathname !== "/login" && pathname !== "/signup" ? (
                <NavBar loggedUser={loggedUser} setUserLogged={setUserLogged} />
            ) : (
                ""
            )}
            <Routes>
                <Route
                    exact
                    path="/login"
                    element={<Login setUserLogged={setUserLogged} />}
                />
                <Route exact path="/signup" element={<Signup />} />
                <Route exact path="/" element={<Home />} />
                <Route
                    exact
                    path="/administrador/*"
                    element={
                        <RutasProtegidas>
                            <RutasAdmin />
                        </RutasProtegidas>
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
