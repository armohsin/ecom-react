import './App.css';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Footer from './Components/Footer';

function App() {
  return (
    <div className='bg-gray-50'>
      <Navbar/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
