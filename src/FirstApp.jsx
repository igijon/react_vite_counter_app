const newMessage = [1,2,3,4,5,6,7];  //Forma parte del componente, no está definido en el ámbito global
export const FirstApp = () => {
    return ( //Fragmentos
        <> 
            <h1>{ newMessage }</h1>
            <p>Soy un subtítulo</p>
        </>
    );
}