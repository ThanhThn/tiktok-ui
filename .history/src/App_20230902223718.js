import './App.css';
import Home from './pages/Home';

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
      <h1></h1>
    </div>
  );
}



export default App;
