import React from "react";
import "./Archie_time.css";
import token from "../Assests/token.png";

function Archie_time() {
  return (
    <div className="token_archie_main_bg">
      <h1 className="text-white text-center py-3">
        {" "}
        <span className="clr"> Token </span> Allocations
      </h1>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="token_img">
              <img src={token} className="token_img  rounded" alt="" />
            </div>
          </div>

          <div className="col-md-6 mt-4 mt-md-0">
            <div className="">
              <table className="table ">
                <thead>
                  <tr className="TOKEN_TABLE">
                    <th className="text-white sdsds">DESCRIPTION</th>
                    <th className="text-white sdsds">PCT%</th>
                    <th className="text-white sdsds ">NUMBER OF TOKENS</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="sdsds">LIQUIDITY</td>
                    <td className="sdsds">15%</td>
                    <td className="sdsds">150,000,000%</td>
                  </tr>
                  <tr>
                    <td className="sdsds">DEVELOPER</td>
                    <td className="sdsds">10%</td>
                    <td className="sdsds">100,000,000%</td>
                  </tr>
                  <tr>
                    <td className="sdsds">MARKETING</td>
                    <td className="sdsds">10%</td>
                    <td className="sdsds">100,000,000%</td>
                  </tr>
                  <tr>
                    <td className="sdsds">WE CARE KITTY</td>
                    <td className="sdsds">5%</td>
                    <td className="sdsds">50,000,000</td>
                  </tr>
                  <tr>
                    <td className="sdsds">Team</td>
                    <td className="sdsds">5%</td>
                    <td className="sdsds">50,000,000</td>
                  </tr>
                  <tr>
                    <td className="sdsds">STAKING</td>
                    <td className="sdsds">10%</td>
                    <td className="sdsds">100,000,000</td>
                  </tr>
                  <tr>
                    <td className="sdsds">UBET</td>
                    <td className="sdsds">5%</td>
                    <td className="sdsds">50,000,000</td>
                  </tr>

                  <tr>
                    <td className="sdsds">RESERVE</td>
                    <td className="sdsds"> 40%</td>
                    <td className="sdsds">400,000,000</td>
                  </tr>

                  <tr className="TOKEN_TABLE">
                    <td scope="col" className="text-white sdsds">
                      TOTAL
                    </td>
                    <td scope="col" className="text-white sdsds">
                      {" "}
                      100%
                    </td>
                    <td scope="col" className="text-white sdsds">
                      {" "}
                      1, 000, 000, 000
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Archie_time;
