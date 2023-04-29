import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Contacts from './pages/contacts/Contacts';
import About from './pages/about/About';
import Singin from './pages/singin/Singin';
import Cart from './pages/cart/Cart';
import Wishlist from './pages/wishlist/Wishlist';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>} />
          <Route path='/contacts' element={<Contacts/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/signup' element={<Singin/>} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='/wishlist' element={<Wishlist/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
