import { Outlet } from "react-router-dom";
import Header from '../components/Header';
import Footer from '../components/Footer';
import ResponsiveNav from "./ResponsiveNav";


const Layout = () => {
    return (
        <div>           
            <Header/>
            <ResponsiveNav/>                         
            <main>
                <Outlet/>
            </main>
            <Footer/>
        </div>
    )
}

export default Layout;