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
import Buy_model from './Components/Buy_model/Buy_model';
import Archiniko_nft from './Components/Archiniko_nft/Archiniko_nft';
import Archiniko_Second from './Components/Archiniko_Second/Archiniko_Second';
import Archive_Meta from './Components/Archive_Meta/Archive_Meta';
import Archive_MetaTwo from './Components/Archive_MetaTwo/Archive_MetaTwo';
import Archive_WeCare from './Components/Archive_WeCare/Archive_WeCare';
import Archive_weCare_Two from './Components/Archive_weCare_Two/Archive_weCare_Two';
import Archive_Nav_main from './Components/Archive_Nav_main/Archive_Nav_main';
import Eco_Sysytem_main from './Components/Eco_Sysytem_main/Eco_Sysytem_main';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">

{/* <Contact />
<Contact_form />


<Archive_staking /> 
<Archive_NFT /> 

 <Stacking_bg />
<Staking_NFT /> 
 <KittyMain/> */}
 {/* <Buy_model/> */}
 
 {/* <Archiniko_nft />
 <Archiniko_Second />

<Archive_Meta/>
<Archive_MetaTwo />

<Archive_WeCare />
<Archive_weCare_Two /> */}
{/* <Archive_Nav_main/> */}
<Eco_Sysytem_main/ >
    </div>
  )
}

export default App
