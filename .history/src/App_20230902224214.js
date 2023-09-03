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
            <Link href='/'>Home</Link>
          </li>
          <li>
            <Link href='/news'>News</Link>
          </li>
          <li>
            <Link href='/contact'>Contact</Link>
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
