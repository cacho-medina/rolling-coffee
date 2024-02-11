import banner from "../../assets/banner.png";
import Productos from "./producto/Productos";

function Home() {
    return (
        <div>
            <img
                src={banner}
                alt="banner rolling coffee"
                className="img-fluid"
            />
            <Productos></Productos>
        </div>
    );
}

export default Home;
