const newMessage = {
    message: 'Hola Mundo',
    title: 'Fernando'
};  //Forma parte del componente, no está definido en el ámbito global
export const FirstApp = () => {
    return ( //Fragmentos
        <> 
            <code>{ JSON.stringify(newMessage) }</code>
            <p>Soy un subtítulo</p>
        </>
    );
}