import React from "react";
import './App.css'
import Footer from "./Components/Footer";
import Nav from "./Components/Nav";
import Search from "./Components/Search";
import Slider from "./Components/Slider";


const App = () => {
  return (
    <>
    <div><Nav />
    </div>
    <div className="bg-coolgray-100 w-full h-screen">
    <div><Search />
    </div>
    <div><Slider />
    </div>
    <div><Footer/></div>
    </div>
    
    
    </>
  )
}

export default App