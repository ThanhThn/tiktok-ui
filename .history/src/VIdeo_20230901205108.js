import Download from './video/Download.mp4'
import {}
function Video(){
    return (
        <video src={Download} style={{
            width: 260,
            
        }} ref={videoRef}/>
    )
}

export default Video