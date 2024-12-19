const getResult = (a, b) =>{
    return a+b;
}
export const FirstApp = () => {
    return ( //Fragmentos
        <> 
            <h1>{ getResult(3,4) }</h1>
            {/*<code>{ JSON.stringify(newMessage) }</code>*/} 
            <p>Soy un subtítulo</p>
        </>
    );
}