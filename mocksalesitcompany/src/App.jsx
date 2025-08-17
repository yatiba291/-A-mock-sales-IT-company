import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import Products from "./Pages/Products";
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

const App = () => {
  return (
    <>

  <BrowserRouter>
   <NavBar/> 
   <Routes>
   <Route path="/" element={<Products></Products>}> </Route>
   <Route path="/cart" element={<cart></cart>}></Route>
   </Routes>
   <Footer/>
  </BrowserRouter>
   





   
    </>
  )
}

export default App