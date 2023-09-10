import {BrowserRouter, Routes, Route} from 'react-router-dom';

// pages and components
import Home from './pages/Home';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Shop from './pages/Shop';
import Contact from './pages/Contact';
import Cart from './pages/cart';
import Signup from './pages/signup';
import Signin from './pages/signin';

// js files
import './pages/assets/js/app'

function App() {
  return (
    <div className="App">
      <BrowserRouter>  
        <Routes>
          
          <Route path='/'  element={<Home />}/>
          <Route path='/about'  element={<About />}/>
          <Route path='/gallery'  element={<Gallery />}/>
          <Route path='/shop' element={<Shop />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/signup' element={<Signup /> } />
          <Route path='/signin' element={<Signin /> } />
        
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;