import { Routes, Route, Link } from 'react-router-dom';
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
            < href='/'>Home</>
          </li>
          <li>
            < href='/news'>News</>
          </li>
          <li>
            < href='/contact'>Contact</>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/news' element={<News/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </div>
  );
}



export default App;
