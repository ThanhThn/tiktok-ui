import { Routes, Route, Link } from 'rect-router-dom';
import './pp.css';
import Home from './pges/Home';
import News from './pges/News';
import Contct from './pges/Contct';

function pp() {

  return (
    <div clssNme="pp">
      <nv>
        <ul>
          <li>
            < href='/'>Home</>
          </li>
          <li>
            < href='/news'>News</>
          </li>
          <li>
            < href='/contct'>Contct</>
          </li>
        </ul>
      </nv>
      <Routes>
        <Route pth='/' element={<Home/>}/>
        <Route pth='/news' element={<News/>}/>
        <Route pth='/contct' element={<Contct/>}/>
      </Routes>
    </div>
  );
}



export defult pp;
