import './App.css';
import { useImperativeHandle } from 'react';
import Video from './Video';
function App() {

  return (
    <div className="App" style={{ padding: 32 }}>
      <Video/>
      <div className='button'>
      <button>Play</button>
      <button>Pause</button>
      </div>
     
    </div>
  );
}



export default App;
