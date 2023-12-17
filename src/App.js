import './App.css';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Footer from './Components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CheckOut from './Pages/CheckOut';
import Shop from './Pages/Shop';
import ContactUs from './Pages/ContactUs';


function App() {
  return (
    <div className='bg-gray-50'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/shop" element={<Shop/>}/>
          <Route exact path="/check-out" element={<CheckOut/>}/>
          <Route exact path="/contact-us" element={<ContactUs/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
