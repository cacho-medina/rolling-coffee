import banner from "../../assets/banner.png";
import Productos from "./producto/Productos";
//import banner2 from "../../assets/banner2.jpg";

function Home() {
    return (
        <main className="grow">
            <img
                src={banner}
                alt="banner rolling coffee"
                className="max object-fit-cover"
            />
            <Productos></Productos>
        </main>
    );
}

export default Home;
