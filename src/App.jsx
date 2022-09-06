
import './App.css';

import Nav from './components/NavBar';
import ItemListContainer from './containers/ItemListContainer'

function App() {
  return (
      <>
        <Nav/>
        <ItemListContainer greeting = "Welcome..."/>
      </>
  );
}

export default App;
