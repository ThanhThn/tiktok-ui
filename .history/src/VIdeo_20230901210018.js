import Download from './video/Download.mp4'
import { forwardRef, useImperativeHandle } from 'react'
function Video(props, ref){
    useImperativeHandle(ref, ()=>{
        play
    })
    return (
        <video src={Download} style={{
            width: 260,
            
        }}/>
    )
}

export default forwardRef(Video)