import React from "react";
import Footer from "../Footer/Footer";
import Container from "../Container/Container";
import Navbar from "../Navbar/Navbar";

function Layout(props) {
  return (
    <div>
      <Navbar></Navbar>
      <Container>{props.children}</Container>
      <Footer></Footer>
    </div>
  );
}

export default Layout;