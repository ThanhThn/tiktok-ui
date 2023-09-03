import { useContext } from 'react';
import './App.css';
import { useStore } from './store';


function App() {
  const [state, dispatch] = useStore()
  const {todos, todoInput} = state;
  console.log(state)
  return (
    <div className="App" style={{ padding: 32 }}>
      <input value={todoInput} placeholder='Enter todo..' />
    </div>
  );
}



export default App;
