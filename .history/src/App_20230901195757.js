import { useContext } from 'react';
import './App.css';
import { useStore } from './store';


function App() {
  const [state, dispatch] = useStore
  console.log(state)
  return (
    <div className="App" style={{ padding: 32 }}>
      <h1>Hello Anh em</h1>
    </div>
  );
}



export default App;
