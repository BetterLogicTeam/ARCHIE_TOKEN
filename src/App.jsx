import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Complete_home_page from './Components/Complete_home_page/Complete_home_page';
import Main_footer from './Components/Main_footer/Main_footer';
import Sub_footer from './Components/Sub_footer/Sub_footer';
import Contact_page_full from './Components/Contact_page_full/Contact_page_full';
import KittyMain from './Components/KittyMain/KittyMain';
import Archive_staking from './Components/Archive_staking/Archive_staking';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
<BrowserRouter>
  <Header/>
  <Routes>
  <Route path="/" element={< Complete_home_page/>} />
  <Route path="/contact_us" element={< Contact_page_full/>} />
  <Route path="/WECAREKITTY" element={< KittyMain/>} />
  <Route path="/Archie_Staking" element={< Archive_staking/>} />
  </Routes>
  <Main_footer/>
  <Sub_footer/>
</BrowserRouter>
 


    </div>
  )
}

export default App
