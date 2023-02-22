import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import './App.css'
import Header from './Components/Header/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import Graph_part from './Components/Graph_part/Graph_part';
import Home_card from './Components/Home_card/Home_card';
import KittyMain from './Components/KittyMain/KittyMain';
import Home_slider_1 from './Components/Home_slider_1/Home_slider_1';
import Road_map from './Components/Road_map/Road_map';
import Team_kyc from './Components/Team_kyc/Team_kyc';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Team_kyc/>
      {/* <Road_map/> */}
      {/* <Header /> */}
      {/* <Graph_part /> */}
      {/* <KittyMain /> */}
      {/* <Home_slider_1/> */}
      {/* <Home_card/> */}
    </div>
  )
}

export default App
