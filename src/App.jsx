
import './App.css';


import Footer from './components/Footer';
import Nav1 from './components/NavBar';
import ItemListContainer from './containers/ItemListContainer'
import ItemDetailContainer from './containers/ItemDetailContainer';
import Cart from "./components/Cart"
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import CartContextProvider, { CartContext } from './components/CartContext';


function App() {
  return (
      <CartContextProvider>  
        <BrowserRouter>
          <Nav1/>
          <Routes>
            <Route path = "/" element = {<div className='fondo'><ItemListContainer/></div>}/>
            <Route path = '/category/:id' element = {<div className='fondo'><ItemListContainer/></div>}/>
            <Route path = "/item/:id" element = {<div className='fondo'><ItemDetailContainer/></div>} />
            <Route path = "/Cart" element = {<Cart/>}/>
          </Routes>
          <Footer/>
        </BrowserRouter>
      </CartContextProvider>
  );
}

export default App;
