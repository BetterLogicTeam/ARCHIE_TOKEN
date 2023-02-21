import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import KittyMain from './Components/KittyMain/KittyMain';
import Staking_NFT from './Components/Staking_NFT/Staking_NFT';
import Archive_staking from './Components/Archive_staking/Archive_staking';
import Stacking_bg from './Components/Stacking_bg/Stacking_bg';
import Archive_NFT from './Components/Archive_NFT/Archive_NFT';
import Contact from './Components/Contact/Contact';
import Contact_form from './Components/Contact_form/Contact_form';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">

<Contact />
<Contact_form />


<Archive_staking /> 
<Archive_NFT /> 

 <Stacking_bg />
<Staking_NFT /> 
 <KittyMain/>

    </div>
  )
}

export default App
