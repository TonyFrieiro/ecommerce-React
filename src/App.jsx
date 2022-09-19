
import './App.css';

import Nav from './components/NavBar';
import ItemListContainer from './containers/ItemListContainer'
import ItemDetailContainer from './containers/ItemDetailContainer';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
  return (
      <BrowserRouter>
        <Nav/>
        <Routes>
          <Route path = "/" element = {<div className='fondo'><ItemListContainer/></div>}/>
          <Route path = '/category/:id' element = {<ItemListContainer/>}/>
          <Route path = "/item/:id" element = {<div className='fondo'><ItemDetailContainer/></div>} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
