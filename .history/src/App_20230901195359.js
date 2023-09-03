import { useContext } from 'react';
import './App.css';
import {StoreContext} from './store'



function App() {
  const state = useContext(StoreContext)
  co
  return (
    <div className="App" style={{ padding: 32 }}>
      <h1>Hello Anh em</h1>
    </div>
  );
}



export default App;
