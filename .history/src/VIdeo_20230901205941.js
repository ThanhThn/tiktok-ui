import Download from './video/Download.mp4'
import { forwardRef, useImperativeHandle } from 'react'
function Video(props, ref){
    useImperativeHandle(ref)
    return (
        <video src={Download} style={{
            width: 260,
            
        }} ref={ref}/>
    )
}

export default forwardRef(Video)