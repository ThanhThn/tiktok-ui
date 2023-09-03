import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import () from ''

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/following' element={<Following/>}/>
        </Routes>
        <nav>
        </nav>
      </div>
    </Router>
  );
}

export default App;
