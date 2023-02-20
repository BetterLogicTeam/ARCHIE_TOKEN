import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import './App.css'
import Header from './Components/Header/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import Graph_part from './Components/Graph_part/Graph_part';
import Home_card from './Components/Home_card/Home_card';
import KittyMain from './Components/KittyMain/KittyMain';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
<Header/>
<Graph_part/>
<KittyMain/>
{/* <Home_card/> */}
    </div>
  )
}

export default App
