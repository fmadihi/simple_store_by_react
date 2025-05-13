import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Routes, Rout, Route} from 'react-router-dom';
import Shop from './pages/Shop';
import Card from './pages/Card';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <Router>
      <Nav />
        <Routes>
          <Route path={'/'} element={<Shop />}/>
          <Route path={'/Card'} element={<Card />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
