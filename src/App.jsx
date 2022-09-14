
import './App.css';

import Nav from './components/NavBar';
import ItemListContainer from './containers/ItemListContainer'
import ItemDetailContainer from './containers/ItemDetailContainer';

function App() {
  return (
      <>
        <Nav/>
        {/* <div className='fondo'><ItemListContainer greeting = "Welcome..."/></div> */}
        <div className=''><ItemDetailContainer/></div>
      </>
  );
}

export default App;
