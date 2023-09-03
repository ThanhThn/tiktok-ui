import './App.css';
import fr
function App() {

  const videoRef = useRef()


  useEffect(()=>{
    console.log(videoRef.current.play)},[])
  
  const handlePlay = ()=>{
    videoRef.current.play();
  }

  const handlePause = ()=>{
    videoRef.current.pause();
  }
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
