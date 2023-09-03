import { useContext } from 'react';
import './App.css';
import {u}


function App() {
  const [state, dispatch] = useContext(StoreContext)
  console.log(state)
  return (
    <div className="App" style={{ padding: 32 }}>
      <h1>Hello Anh em</h1>
    </div>
  );
}



export default App;
