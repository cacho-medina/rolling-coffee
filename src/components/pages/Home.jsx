import banner from "../../assets/banner.png";
//import banner from "../../assets/banner2.jpg";
import Productos from "./producto/Productos";
/* import { Parallax } from "react-parallax"; */

function Home() {
    return (
        <main className="grow">
            {/* <Parallax
                strength={-200}
                bgImage={banner}
                bgImageAlt="banner rolling coffee"
                className="bg-center"
            >
                <div className="max"></div>
            </Parallax> */}
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
