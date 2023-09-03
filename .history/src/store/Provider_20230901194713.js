import { useReducer } from "react";
import Content from "../Content";
import reducer,{initState} from "./reducer";

function Provider ({children}){
    const [state, dispatch] = useReducer(reducer,initState)
    return(
        <Content.P value = {[state, dispatch]}>
            {children}
        </Content.P>
    )
}

export default Provider