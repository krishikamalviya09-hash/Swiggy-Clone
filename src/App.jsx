import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Offers from "./components/offers";
import Help from "./components/help";
import Cart from "./components/Cart";


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} /> 
        <Route path="/offers" element = {<Offers/>}/>
        <Route path="/Help" element= {<Help/>}/>
        <Route path = "/Cart" element = {<Cart/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
