import { Children } from "react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";


function Layout({ children }) {
    return (
        <>
        <Navbar />
        <Main>{Children}</Main>
        <Footer />
        </>
    );
};

export default Layout;