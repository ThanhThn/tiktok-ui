import Download from './video/Download.mp4'
import { forwardedRef } from 'react'
function Video(){
    return (
        <video src={Download} style={{
            width: 260,
            
        }} ref={videoRef}/>
    )
}

export default Video