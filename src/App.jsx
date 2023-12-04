import './App.css'
import Parte from './componentes/Parte'

const App = () => {
  const curso = 'Desarrollo web en entorno cliente. 2ª Evaluación'
  const parte1 = 'Fundamentos de React'
  const ejercicios1 = 10
  const parte2 = 'React avanzado'
  const ejercicios2 = 7
  const parte3 = 'Otros frameworks'
  const ejercicios3 = 14

  return (
    <div>
      <h1>{curso}</h1>
      <Parte parte={parte1} ejercicios={ejercicios1}/>
      <Parte parte={parte2} ejercicios={ejercicios2}/>
      <Parte parte={parte3} ejercicios={ejercicios3}/>
      <p>Numero de ejercicios {ejercicios1 + ejercicios2 + ejercicios3}</p>
    </div>
  )
}

export default App
