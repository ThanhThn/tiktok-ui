import Download from './video/Download.mp4'
import { useRef } from 'react'
function Video(){
    return (
        <video src={Download} style={{
            width: 260,

        }}/>
    )
}

export default Video