import Download from './video/Download.mp4'
import { useRef } from 'react'
function Video(){
    const videoRef = useRef();
    return (
        <video src={Download} style={{
            width: 260,
            re
        }}/>
    )
}

export default Video