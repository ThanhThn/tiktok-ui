import Content from "../Content";

function Provider ({children}){
    return(
        <Content.Provider values>
            {children}
        </Content.Provider>
    )
}

export default Provider