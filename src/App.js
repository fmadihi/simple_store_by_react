import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Routes, Rout, Route} from 'react-router-dom';
import Shop from './pages/Shop';
import Card from './pages/Card';
import Nav from './components/Nav';
import {ShopContextProvider} from './context/shopContext'

function App() {
  return (
    <div className="App">
    <ShopContextProvider>
      <Router>
      <Nav />
        <Routes>
          <Route path={'/'} element={<Shop />}/>
          <Route path={'/Card'} element={<Card />} />
        </Routes>
      </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
