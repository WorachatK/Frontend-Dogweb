import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Menu from "./components/Menu/Menu";
import Head from "./components/Head/Head";
import About from "./components/About/About";
import Ourpet from "./components/Ourpet/Ourpet";
import HelpUs from "./components/HelpUs/HelpUs";
import Contract from "./components/Contract/Contract";
import Footer from "./components/Footer/Footer";

function App() {

    const [openMenu,setOpenMenu] = useState(false)
    const handleOpen = () =>{
      setOpenMenu(!openMenu)
    }

  return (
    <div>
      <Menu openMenu={openMenu} handleOpen={handleOpen}/>
      <Navbar handleOpen={handleOpen}/>
      <Head/>
      <About/>
      <Ourpet/>
      <HelpUs/>
      <Contract/>
      <Footer/>
    </div>
  );
}

export default App;
