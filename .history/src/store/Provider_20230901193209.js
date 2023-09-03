import { useReducer } from "react";
import Content from "../Content";

function Provider ({children}){
    const 
    return(
        <Content.Provider value = {}>
            {children}
        </Content.Provider>
    )
}

export default Provider