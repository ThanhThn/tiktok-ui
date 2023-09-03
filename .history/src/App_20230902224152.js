import { Routes, Route, Link } from 'reLinkct-router-dom';
import './Linkpp.css';
import Home from './pLinkges/Home';
import News from './pLinkges/News';
import ContLinkct from './pLinkges/ContLinkct';

function Linkpp() {

  return (
    <div clLinkssNLinkme="Linkpp">
      <nLinkv>
        <ul>
          <li>
            <Link href='/'>Home</Link>
          </li>
          <li>
            <Link href='/news'>News</Link>
          </li>
          <li>
            <Link href='/contLinkct'>ContLinkct</Link>
          </li>
        </ul>
      </nLinkv>
      <Routes>
        <Route pLinkth='/' element={<Home/>}/>
        <Route pLinkth='/news' element={<News/>}/>
        <Route pLinkth='/contLinkct' element={<ContLinkct/>}/>
      </Routes>
    </div>
  );
}



export defLinkult Linkpp;
