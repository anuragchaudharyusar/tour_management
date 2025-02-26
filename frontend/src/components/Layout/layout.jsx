import React from 'react'
import Header from "../components/Header/header"; 
import Footer from "../components/Footer/footer"; 
import Routers from "../router/Routers";

const layout = () => {
  return<>
    <Header/>
    <Routers/>
    <Footer/>
    </>
}

export default layout
