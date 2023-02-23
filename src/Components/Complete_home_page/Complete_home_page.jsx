import React from 'react'
import Archie_patner from '../Archie_patner/Archie_patner';
import Archie_time from '../Archie_time/Archie_time';
import ARCHIE_PART from '../ARHCHIE_PART/ARCHIE_PART';
import Benifits_archie from '../Benifits_archie/Benifits_archie';
import Contact_form from '../Contact_form/Contact_form';
import Graph_part from '../Graph_part/Graph_part';
import KittyMain from '../KittyMain/KittyMain';
import Main_footer from '../Main_footer/Main_footer';
import Sub_footer from '../Sub_footer/Sub_footer';
import Home_slider_1 from '../Home_slider_1/Home_slider_1';
import Road_map from '../Road_map/Road_map';
import WeCareKitty_Cat from '../WeCareKitty_Cat/WeCareKitty_Cat';


export default function Complete_home_page() {
  return (
    <div >
    
         <Home_slider_1 />
         <Graph_part />
        <Benifits_archie />
        <Archie_time />
        <Road_map/>


<WeCareKitty_Cat />     

         
         <ARCHIE_PART />
       <Archie_patner />
     
       {/* <Contact /> */}
       {/* <Contact_form /> */}

{/* <Contact /> */}
         
         

    </div>
  )
}
