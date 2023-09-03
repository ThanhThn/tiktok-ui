import { useContext } from 'react';
import './App.css';
import { useStore } from './store';


function App() {
  const [state, dispatch] = useStore()
  console.log(state)
  return (
    <div className="App" style={{ padding: 32 }}>
      <input value={todo}/>
    </div>
  );
}



export default App;
