import './App.css';
import { actions, useStore } from './store';


function App() {
  const [state, dispatch] = useStore()
  const {todos, todoInput} = state;
  console.log(state)
  return (
    <div className="App" style={{ padding: 32 }}>
      <input value={todoInput} placeholder='Enter todo..' onChange={e => {
        dispatch(actions.setTodoInput(e))
      }}/>
    </div>
  );
}



export default App;
