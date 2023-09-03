import './App.css';
import { useImperativeHandle } from 'react';
import Video from './Video';
function App() {

  return (
    <div className="App" style={{ padding: 32 }}>
      <Video/>
      <button>Play</button>
      
    </div>
  );
}



export default App;
