import './App.css';
import Button from './store/Button'
function App() {

  return (
    <div className="App" style={{ padding: 32 }}>
      <Video ref={videoRef}/>
      <div className='button'>
       <button onClick={handlePlay}>Play</button>
       <button onClick={handlePause}>Pause</button>
      </div>
     
    </div>
  );
}



export default App;
