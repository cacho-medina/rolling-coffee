import "./App.css";
import NavBar from "./components/common/NavBar";
import Footer from "./components/common/Footer";
import Home from "./components/pages/Home";
import Admin from "./components/pages/Admin";
import Error from "./components/pages/Error";

function App() {
    return (
        <>
            <NavBar />
            {/* <Home /> */}
            <Admin />
            {/* <Error /> */}
            <Footer />
        </>
    );
}

export default App;
