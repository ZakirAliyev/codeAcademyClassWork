import Navbar from "../../components/Main/Navbar/index.jsx";
import {Outlet} from "react-router-dom";
import Footer from "../../components/Main/Footer/index.jsx";

function MainPage() {

    return (
        <>
            <Navbar/>
            <div className={"container"}>
                <Outlet/>
            </div>
            <Footer/>
        </>
    )
}

export default MainPage;
