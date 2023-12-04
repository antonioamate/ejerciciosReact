import './App.css'
import Author from './componentes/Author';
import Avatar from './componentes/Avatar'
import Button from './componentes/Button';
import Message from './componentes/Message';
const App = () => {
  const tweet = 'Comenzamos con React en el módulo de Desarrollo web en entorno cliente. 2ª Evaluación';
  const nombre = 'Víctor M. Garrido';
  const nick = '@vgc02g';
  const cuando = '3h ago ';

  return (
    <div className="tweet">
      <Avatar linkImagen="https://www.gravatar.com/avatar/763dcd4dad38689d57aa9d83a60bfaa5.jpg"></Avatar>
      <div className="content">
        <Author nombre={nombre} nick={nick} cuando={cuando}></Author>
        <Message tweet={tweet}></Message>
        <div className="buttons" >
          <Button btnIco="reply" btnType="reply"></Button>
          <Button btnIco="retweet" btnType="retweet"></Button>
          <Button btnIco="heart" btnType="like"></Button>
          <Button btnIco="elipsis-h" btnType="more-options"></Button>
        </div>
      </div>
    </div>
  )
}

export default App
