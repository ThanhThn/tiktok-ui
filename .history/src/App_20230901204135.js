import './App.css';
import { useImperativeHandle } from 'react';
import Video from './Video';
function App() {

  return (
    <div className="App" style={{ padding: 32 }}>
      <Video/>
      <br/>
      <div
      <button>Play</button>
      <button>Pause</button>
    </div>
  );
}



export default App;
