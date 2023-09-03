import './App.css';



function App() {
  const [state, dispatch] = useStore()
  const {todos, todoInput} = state;
  console.log(state)
  return (
    <div className="App" style={{ padding: 32 }}>
      <input value={todoInput} placeholder='Enter todo..' onChange={e => {
        dispatch(actions.setTodoInput(e.target.value))
      }}/>
    </div>
  );
}



export default App;