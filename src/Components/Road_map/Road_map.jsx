import React from 'react'
import "./Road_map.css"

function Road_map() {
    return (
        
        <div className='road_map_main_bg  '>
        <div className='container py-5'>
            <div className="main_heading_layer text-center mb-5">
                <h1 className='arch_core'>Archie <span className='rp_core ooo'>Road Map</span></h1>
            </div>

            {/* phase 1 */}
            <div className="row align-items-center">
                <div className="col-lg-2 d-flex justify-content-start justify-content-md-center mb-3 mb-md-0 ">
                    <div className="circle_one">
                        <h5 className='phas_1'>Phase 1</h5>
                    </div>
                </div>
                <div className="col-lg-6">
                    <ul className='list-unstyled'>
                        <li className='listt text-white'>White Paper</li>
                        <li className='listt text-white'>Marketing</li>
                        <li className='listt text-white'>Third Party Audit</li>
                        <li className='listt text-white'>ArchieSwap</li>
                        <li className='listt text-white'>Dextools</li>
                        <li className='listt text-white'>Launch</li>
                    </ul>
                </div>
            </div>
    
            <div className="row timeline">
                <div className="col-2">
                    <div className="corner top-right"></div>
                </div>
                <div className="col-8">
                    <hr className='MID_LINE' />
                </div>
                <div className="col-2">
                    <div className="corner left-bottom"></div>
                </div>
            </div>

            {/* phase 2 */}
            <div className="row justify-content-end align-items-center flex-column-reverse flex-md-row ">
                <div className="col-lg-6 d-flex justify-content-end justify-content-md-center">
                    <ul className='list-unstyled '>
                        <li className='listt text-white'>Staking Dapp</li>
                        <li className='listt text-white'>NFT Staking</li>
                        <li className='listt text-white'>Coingecko</li>
                        <li className='listt text-white'>CoinMarket Cap</li>
                        <li className='listt text-white'>Exchange Listing</li>
                        <li className='listt text-white'>We Care Kitty NFT</li>
                    </ul>
                </div>
                <div className="col-lg-2 d-flex justify-content-end justify-content-md-center mb-3 mb-md-0">
                    <div className="circle_one">
                        <h5 className='phas_1'>Phase 2</h5>
                    </div>
                </div>
            </div>

            <div className="row timeline">
                <div className="col-2">
                    <div className="corner right-bottom "></div>
                </div>
                <div className="col-8">
                    <hr className='MID_LINE' />
                </div>
                <div className="col-2">
                    <div className="corner top-left"></div>
                </div>
            </div>

            {/* phase 3 */}
            <div className="row align-items-center">
                <div className="col-lg-2 d-flex justify-content-start justify-content-md-center mb-3 mb-md-0">
                    <div className="circle_one">
                        <h5 className='phas_1'>Phase 3</h5>
                    </div>
                </div>
                <div className="col-lg-6">
                    <ul className='list-unstyled'>
                        <li className='listt text-white'>ArchiePlace</li>
                        <li className='listt text-white'>Exchange Listing</li>
                        <li className='listt text-white'>ArchieMeta Phase 3</li>
                    </ul>
                </div>
            </div>

            <div className="row timeline">
                <div className="col-2">
                    <div className="corner top-right"></div>
                </div>
                <div className="col-8">
                    <hr className='MID_LINE' />
                </div>
                <div className="col-2">
                    <div className="corner left-bottom"></div>
                </div>
            </div>

            {/* phase 4 */}
            <div className="row justify-content-end align-items-center flex-column-reverse flex-md-row">
                <div className="col-lg-6 d-flex justify-content-end justify-content-md-center">
                    <ul className='list-unstyled '>
                        <li className='listt text-white'>ArchieMeta Phase 4</li>
                        <li className='listt text-white'>Exchange Listing</li>
                    </ul>
                </div>
                <div className="col-lg-2 d-flex justify-content-end justify-content-md-center mb-3 mb-md-0">
                <div className="circle_one">
                        <h5 className='phas_1'>Phase 4</h5>
                    </div>
                </div>
            </div>

            <div className="row timeline">
                <div className="col-2">
                    <div className="corner right-bottom "></div>
                </div>
                <div className="col-8">
                    <hr className='MID_LINE' />
                </div>
                <div className="col-2">
                    <div className="corner top-left"></div>
                </div>
            </div>

            {/* phase 5 */}
            <div className="row align-items-center">
                <div className="col-lg-2 d-flex justify-content-start justify-content-md-center mb-3 mb-md-0">
                    <div className="circle_one">
                        <h5 className='phas_1'>Phase 5</h5>
                    </div>
                </div>
                <div className="col-lg-6">
                    <ul className='list-unstyled'>
                        <li className='listt text-white'>ArchiePlace V2</li>
                        <li className='listt text-white'>Archie Meta Phase 5</li>
                        <li className='listt text-white'>Exchange Listing</li>
                    </ul>
                </div>
            </div>

            <div className="row timeline">
                <div className="col-2">
                    <div className="corner top-right"></div>
                </div>
                <div className="col-8">
                    <hr className='MID_LINE' />
                </div>
                <div className="col-2">
                    <div className="corner left-bottom"></div>
                </div>
            </div>

            {/* phase 6 */}
            <div className="row justify-content-end align-items-center flex-column-reverse flex-md-row">
                <div className="col-lg-6 d-flex justify-content-end justify-content-md-center">
                    <ul className='list-unstyled '>
                        <li className='listt text-white'>Archie Meta Phase 6</li>
                        <li className='listt text-white'>Exchange Listing</li>
                    </ul>
                </div>
                <div className="col-lg-2 d-flex justify-content-end justify-content-md-center mb-3 mb-md-0">
                <div className="circle_one">
                        <h5 className='phas_1'>Phase 6</h5>
                    </div>
                </div>
            </div>

        </div>
        </div>
    )
}

export default Road_map
