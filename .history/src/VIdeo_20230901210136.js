import Download from './video/Download.mp4'
import { forwardRef, useImperativeHandle, useRef } from 'react'
function Video(props, ref){
    const videoRef = useRef()
    useImperativeHandle(ref, ()=>({
        play(){
            videoRef.current.play();
        },
        pause(){
            videoRef.current.pause()
        }
    }))
    return (
        <video src={Download} style={{
            width: 260,
            
        }}/>
    )
}

export default forwardRef(Video)