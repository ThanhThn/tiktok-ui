import Download from './video/Download.mp4'
import { forwardRef } from 'react'
function Video(props){
    return (
        <video src={Download} style={{
            width: 260,
            
        }} ref={props.}/>
    )
}

export default Video