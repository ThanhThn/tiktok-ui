import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { publicRoutes } from '~/routes';
import DefaultLayout from './components/Layout/DefaultLayout';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoutes.map((route, index) =>{
            const Page =route.component
            return (
              <Route key={index} path={route.path} element={<Page/>}/>
            )
          })}
        </Routes>
        <nav></nav>
      </div>
    </Router>
  );
}

export default App;
