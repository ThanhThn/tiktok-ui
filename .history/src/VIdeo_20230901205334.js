import Download from './video/Download.mp4'
import { forwardRef } from 'react'
function Video(props, ref){
    con
    return (
        <video src={Download} style={{
            width: 260,
            
        }} ref={ref}/>
    )
}

export default forwardRef(Video)