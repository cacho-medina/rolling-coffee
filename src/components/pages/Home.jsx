import banner from "../../assets/banner.png";
import Productos from "./producto/Productos";

function Home() {
    return (
        <main>
            <img
                src={banner}
                alt="banner rolling coffee"
                className="img-fluid"
            />
            <Productos></Productos>
        </main>
    );
}

export default Home;
