import React from "react";
import Home_card from "../Home_card/Home_card";

function Token_nomics_page() {
  return (
    <div>
      <div className="Nft_bg">
        <div className="container">
          <div className="row">
            <div className="col">
              <div>
                <h1 className="text-white text-center">
                  <b>Toke</b> <span> nomics</span>
                </h1>
             
              </div>
            </div>
          </div>
        </div>
        <div className="row m-0 justify-content-center">
            <div className="col-md-10">
            <p className="text-white text-center    ">Tokenomics are very much needed for a project to succeed. When we were thinking about setting up a tokenomics for our new project, we have taken lots of things in consideration including the mistakes we have made on our original token.
We need to support our liquidity and of course ,our marketing needs. So, we decided to have the very minimal on two categories. In addition to that, we have separated transfer tax from sell and made it lower since lots of our holders were concerned about that.</p>
        <p className="text-white text-center    ">We will have two different tokenomics : Initial First Month and Regular after First Month</p>
            </div>
        </div>

        


        <div className="row m-0 justify-content-center">
            <h3 className="text-center text-white text-capitalize">first <span className="clr"> 30</span> days </h3>
            <div className="col-md-4">
                <Home_card main_heading='Liquidity' per_1='3%' per_2='4%' details='3% of every Buy & 4% Sell or Transfer transaction is converted into liquidity according to as shown. This is automatic and helps to create a stability.'/>
            </div>
            <div className="col-md-4 mt-4 mt-md-0">
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
            <div className="col-md-4 mt-4 mt-md-0">
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
  );
}

export default Token_nomics_page;
