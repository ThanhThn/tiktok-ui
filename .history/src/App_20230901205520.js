import './App.css';
import { useImperativeHandle, useRef } from 'react';
import Video from './Video';
function App() {

  const videoRef = useRef()
   const handlePlay = 
  return (
    <div className="App" style={{ padding: 32 }}>
      <Video ref={videoRef}/>
      <div className='button'>
       <button>Play</button>
       <button>Pause</button>
      </div>
     
    </div>
  );
}



export default App;
