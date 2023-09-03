import Content from "../Content";

function Provider ({children}){
    return(
        <Content.Provider>
            {children}
        </Content.Provider>
    )
}

export default 