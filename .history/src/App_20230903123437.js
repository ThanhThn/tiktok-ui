import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Following from './pages/Following';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/' element={<Folo/>}/>
        </Routes>
        <nav>
        </nav>
      </div>
    </Router>
  );
}

export default App;
