import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Skills from "./Components/Skills";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Resume from "./Components/Resume";

function App() {
  return (
      <div>
          <Navbar/>
        <div className='bg-[#242424] w-full min-h-screen '>
        <Home/>
        <About/>
        <Skills/>
          <Resume/>
          <Contact/>
        </div>
      </div>
  );
}

export default App;
