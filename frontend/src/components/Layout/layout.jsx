import React from 'react'
import Header from "../Header/header"; 
import Footer from "../Footer/footer"; 
import Routers from "../../router/Routers"; 


const layout = () => {
  return<>
    <Header/>
    <Routers/>
    <Footer/>
    </>
}

export default layout
