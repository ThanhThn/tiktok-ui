import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import News from './pages/News';
import Contact from './pages/Contact';

function App() {

  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <a href='/'>Home</a>
          </li>
          <li>
            <a href='/news'>News</a>
          </li>
          <li>
            <a href='/contact'>Contact</a>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={Home}/>
      </Routes>
    </div>
  );
}



export default App;
