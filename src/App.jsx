import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import KittyMain from './Components/KittyMain/KittyMain';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">

<KittyMain/>

    </div>
  )
}

export default App
