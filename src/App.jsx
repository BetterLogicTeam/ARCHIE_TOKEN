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
import Road_map from './Components/Road_map/Road_map';
import Archive_chain_Full from './Components/Archive_chain_Full/Archive_chain_Full';
import Archive_Swap_full from './Components/Archive_Swap_full/Archive_Swap_full';
import Archive_Scan_full from './Components/Archive_Scan_full/Archive_Scan_full';
import Arc_coin_full from './Components/Arc_coin_full/Arc_coin_full';
import Warc_coin_full from './Components/Warc_coin_full/Warc_coin_full';
import Archive_Agrregator_full from './Components/Archive_Agrregator_full/Archive_Agrregator_full';
import Archive_place_full from './Components/Archive_place_full/Archive_place_full';
import Archive_Walet_Full from './Components/Archive_Walet_Full/Archive_Walet_Full';
import Archive_meta_full from './Components/Archive_meta_full/Archive_meta_full';
import Archive_Islan_full from './Components/Archive_Islan_full/Archive_Islan_full';
import Play_win_Full from './Components/Play_win_Full/Play_win_Full';
import Archive_Ecommerce_full from './Components/Archive_Ecommerce_full/Archive_Ecommerce_full';
import Archive_Reality_Full from './Components/Archive_Reality_Full/Archive_Reality_Full';
import Archive_staking_full from './Components/Archive_staking_full/Archive_staking_full';
import NFT_staking_full from './Components/NFT_staking_full/NFT_staking_full';
import Token_allocation_page from './Components/Token_allocation_page/Token_allocation_page';
import Token_nomics_page from './Components/Token_nomics_page/Token_nomics_page';
import Team_kyc from './Components/Team_kyc/Team_kyc'
import White_paper from './Components/White_paper/White_paper';
// import Archive_Scan_full from './Components/Archive_Scan_full/Archive_Scan_fulls';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={< Complete_home_page />} />
          <Route path="/white_paper" element={< White_paper />} />
          <Route path="/contact_us" element={< Contact_page_full />} />
          <Route path="/contact_us" element={< Contact_page_full />} />
          <Route path="/token_allocation" element={< Token_allocation_page />} />
          <Route path="/nft_staking" element={< NFT_staking_full />} />
          <Route path="/WECAREKITTY" element={< KittyMain />} />
          <Route path="/Archie_Staking" element={< Archive_staking_full />} />
          <Route path="/Road_map" element={< Road_map />} />
          <Route path="/Archie_Chain" element={< Archive_chain_Full />} />
          <Route path="/Archie_Swap" element={< Archive_Swap_full />} />
          <Route path="/Archie_Scan" element={< Archive_Scan_full />} />
          <Route path="/ArcCoin" element={< Arc_coin_full />} />
          <Route path="/WarcCoin" element={< Warc_coin_full />} />
          <Route path="/archie_aa" element={< Archive_Agrregator_full />} />
          <Route path="/ArchiePlace" element={< Archive_place_full />} />
          <Route path="/ArchieWallet" element={< Archive_Walet_Full />} />
          <Route path="/ArchieMeta" element={< Archive_meta_full />} />
          <Route path="/isl_arch" element={< Archive_Islan_full />} />
          <Route path="/play" element={< Play_win_Full />} />
          <Route path="/archieve_e" element={< Archive_Ecommerce_full />} />
          <Route path="/Archie_Reality" element={< Archive_Reality_Full />} />
          <Route path="/tokenomics" element={< Token_nomics_page />} />
          <Route path="/Team_kyc" element={< Team_kyc />} />
        </Routes>
        <Main_footer />
        <Sub_footer />
      </BrowserRouter>



    </div>
  )
}

export default App
