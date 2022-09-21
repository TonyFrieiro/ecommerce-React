
import './App.css';

import Nav from './components/NavBar';
import ItemListContainer from './containers/ItemListContainer'
import ItemDetailContainer from './containers/ItemDetailContainer';
import Cart from "./components/Cart"
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
  return (
      <BrowserRouter>
        <Nav/>
        <Routes>
          <Route path = "/" element = {<div className='fondo'><ItemListContainer/></div>}/>
          <Route path = '/category/:id' element = {<div className='fondo'><ItemListContainer/></div>}/>
          <Route path = "/item/:id" element = {<div className='fondo'><ItemDetailContainer/></div>} />
          <Route path = "/Cart" element = {<Cart/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
