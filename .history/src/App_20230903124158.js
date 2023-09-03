import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { publicRoutes } from '~/routes';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRou
          tes.map(route =>{
            return ()
          })}
        </Routes>
        <nav></nav>
      </div>
    </Router>
  );
}

export default App;
