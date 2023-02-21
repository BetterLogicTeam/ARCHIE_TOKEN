import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import Graph_part from './Components/Graph_part/Graph_part';
import Home_card from './Components/Home_card/Home_card';
import KittyMain from './Components/KittyMain/KittyMain';
import ARCHIE_PART from './Components/ARHCHIE_PART/ARCHIE_PART';
import Sub_footer from './Components/Sub_footer/Sub_footer';
import Main_footer from './Components/Main_footer/Main_footer';
import Archie_patner from './Components/Archie_patner/Archie_patner';
import Benifits_archie from './Components/Benifits_archie/Benifits_archie';
import Archie_time from './Components/Archie_time/Archie_time';
import Contact_form from './Components/Contact_form/Contact_form';
import Contact from './Components/Contact/Contact';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
{/* <Header/>
<Graph_part/>
<KittyMain/>
<ARCHIE_PART/>
<Benifits_archie/>
<Archie_time/>
<Archie_patner/>
<Main_footer/>
<Sub_footer/> */}
<Contact/>
<Contact_form/>

    </div>
  )
}

export default App
