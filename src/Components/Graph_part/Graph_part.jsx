import React from "react";
import chart from "../Assests/chart1.png";
import "./Graph_part.css";
import cat from "../Assests/cat.png";
import invest from "../Assests/invest.png";
import Home_card from "../Home_card/Home_card";

export default function Graph_part() {
  return (
    <div className="">
    <div className="main_bg_archie">
      <div className="container">
        <div className="row">
          <div className="col-md-6  ">
            <h1 className="graphy_heading ">
              {" "}
              <span className="clr me-0"> Dex</span> <span> tools</span>
            </h1>
            <div className="chart_part trans_hvr">
              <img src={chart} className="w-100 chart_g" alt="" />
            </div>
          </div>
          <div className="col-md-6 ">
            <h1 className="graphy_heading ">
              {" "}
              <span className="clr responsive_text me-0"> Coin</span> <span className="responsive_text">Market </span>{" "}
              <span className="clr responsive_text">cap</span>
            </h1>
            <div className="chart_part trans_hvr">
              <img src={chart} className="w-100 chart_g" alt="" />
            </div>
          </div>

          <div className="row justify-content-center p-0 m-0">
            <div className="col-md-6 col-12 mt-4 ">
              <h1 className="graphy_heading ">
                {" "}
                <span className="clr me-0"> Coin</span> <span> Gecko</span>
              </h1>
              <div className="chart_part trans_hvr">
                <img src={chart} className="w-100 chart_g" alt="" />
              </div>
            </div>
          </div>

          <div className="row mt-5 p-0 m-0">
            <div className="col-md-6">
              <div className="cat_pic">
                <img src={cat} className='responsive_width' alt="" />
              </div>
            </div>

            <div className="col-md-6 mt-4 mt-md-0">
              <div className="cat_text">
                <h1 className="cat_text_heading">
                  The Story of <span className="clr"> Archie </span> is Real
                </h1>
                <p className=" text-white text-justify m-0">
                  The story of Archie is real, the story of a cute, friendly,
                  and fiercely loyal kitty. Our vision for Archie is to generate
                  wealth for a decentralized community in a safe and secure
                  environment, leveraging Defi protocols and to impact the globe
                  for good, thereby cherishing the memory of our beloved Archie.
                  As I stated on the previous pages that our good intention was
                  there but, the market conditions and decision to stay in defi
                  market along with supporting and protecting private investors
                  caused us to make some unfavorable decisions. On our New
                  Archie Token in ARC Chain, we are just about trying to do the
                  opposite.
                </p>
              </div>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-md-6">
              <div className="what_Archie">
                <h1 className="text-white">
                  What is <span className="clr"> ArchieToken? </span>
                </h1>
                <p className="text-start text-white">
                  HOME ECO-SYSTEM ARCHIE NFT DOCUMENTS BUY $ARCHIE STAKING
                  WECAREKITTY Buy NFT Previous Next Dextools Coin Market Cap
                  CoinGecko The Story of Archie is Real The story of Archie is
                  real, the story of a cute, friendly, and fiercely loyal kitty.
                  Our vision for Archie is to generate wealth for a
                  decentralized community in a safe and secure environment,
                  leveraging Defi protocols and to impact the globe for good,
                  thereby cherishing the memory of our beloved Archie. As I
                  stated on the previous pages that our good intention was there
                  but, the market conditions and decision to stay in defi market
                  along with supporting and protecting private investors caused
                  us to make some unfavorable decisions. On our New Archie Token
                  in ARC Chain, we are just about trying to do the opposite.
                  What is ArchieToken? Archie Token on our All-New ARC chain
                  will be the ultimate winning combination for our holders. We
                  have listened to enough so-called crypto specialists and lost
                  enough. Now it is time for us to be the winners. 2023 is going
                  to be a real sketchy year to be in crypto based on the market
                  conditions and news coming out. But we have the right recipe
                  and ingredients to make it happen. We are not promising
                  millionaires, but you won’t lose your money. That is always
                  our motto at ArchieNeko.
                </p>
                <p className="text-start text-white">
                  Why are we creating a token on ARC chain while we have a token
                  on Erc-20 already?
                </p>
                <p className="text-start text-white">
                  This is a valid question that came up several times. When we
                  launched our original token, the Eth was at $3,250 and we
                  changed our plans to not to list our token in any centralized
                  exchange. Not only that, our tokenomics were set at 15% on buy
                  and 20% sell to stop the hop in hop out system in crypto
                  industry. Our intensions were good, but the market did not do
                  good and Ethereum went down to $800. Our anti whale mechanism
                  prevented people to ape in and out but also prevented us from
                  further growth.
                </p>
<div className="text-center">
<button className="read_more_btn ">READ MORE</button>
    
</div>

              </div>
            </div>

            <div className="col-md-6 mt-4 mt-md-0">
                <img src={invest} className='w-100' alt="" />
            </div>
          </div>



           <div className="row mt-5  m-0 p-0 text-center ">
            <h1 className="text-white"> Token <span className="clr "> omics?</span></h1>

            <p className="text-white">Tokenomics are very much needed for a project to succeed. When we were thinking about setting up a tokenomics for our new project, we have taken lots of things in consideration including the mistakes we have made on our original token.
We need to support our liquidity and of course ,our marketing needs. So, we decided to have the very minimal on two categories. In addition to that, we have separated transfer tax from sell and made it lower since lots of our holders were concerned about that.</p>
        <p className="text-white">We will have two different tokenomics : Initial First Month and Regular after First Month</p>
        


        <div className="row m-0 justify-content-center">
            <h3 className="text-center text-white text-capitalize">first <span className="clr"> 30</span> days </h3>
            <div className="col-md-4">
                <Home_card main_heading='Liquidity' per_1='3%' per_2='4%' details='3% of every Buy & 4% Sell or Transfer transaction is converted into liquidity according to as shown. This is automatic and helps to create a stability.'/>
            </div>
            <div className="col-md-4">
                <Home_card main_heading='Marketing' per_1='2%' per_2='7%' details='2% of every Buy & 7% of every Sell or Transfer transaction is converted into marketing wallet according to as shown. This will help us to carry out accomplish achieve smart marketing to get our project ready for coming months to the world.'/>
            </div>
        </div>

        <div className="row m-0 justify-content-center my-4">
            <div className="col-md-4">
                <Home_card main_heading='TOTAL' per_1='5%' per_2='11%'/>
            </div>
        </div>


                         
                                <div className="row m-0 justify-content-center">
            <h3 className="text-center text-white text-capitalize">after <span className="clr"> 30</span> days </h3>
            <div className="col-md-4">
                <Home_card main_heading='Liquidity' per_1='3%' per_2='3%' details='3% of every Buy & 4% Sell or Transfer transaction is converted into liquidity according to as shown. This is automatic and helps to create a stability.'/>
            </div>
            <div className="col-md-4">
                <Home_card main_heading='Marketing' per_1='2%' per_2='4%' details='2% of every Buy & 7% of every Sell or Transfer transaction is converted into marketing wallet according to as shown. This will help us to carry out accomplish achieve smart marketing to get our project ready for coming months to the world.'/>
            </div>
        </div>

        <div className="row m-0 justify-content-center mt-4">
            <div className="col-md-4">
                <Home_card main_heading='TOTAL' per_1='5%' per_2='7%'/>
            </div>
        </div>


          </div> 



        </div>
      </div>
      </div>
    </div>
  );
}
