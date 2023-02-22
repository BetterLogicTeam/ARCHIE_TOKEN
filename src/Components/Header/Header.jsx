import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import H_logo from "../Assests/H_logo.png";
import "./Header.css";
import { AiFillInfoCircle } from "react-icons/ai";
import { BsTelegram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { FaDiscord } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsReddit } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
import { Link } from "react-router-dom";
import Buy_model from "../Buy_model/Buy_model";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function Header() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div className="">
      <Navbar
        collapseOnSelect
        expand="lg"
        className="main_bg_nav"
        variant="dark"
      >
        <Container className="">
          <Navbar.Brand href="#home">
            {" "}
            <Link to="/">
              {" "}
              <img src={H_logo} className="header_logo" alt="" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="">
              <Link to="/" className="header_links text-decoration-none">
                {" "}
                <Nav.Link href="#features" className="header_links">
                  Home
                </Nav.Link>{" "}
              </Link>
              <NavDropdown
                title={<span className="header_links  zind">ECO-SYSTEM</span>}
                id="collasible-nav-dropdown"
              >
                <Link to="/Archie_Chain" className='text-decoration-none'>
                  {" "}
                  <NavDropdown.Item href="#action/3.1" className="all_hvr">
                    Archie Chain (ARC)
                  </NavDropdown.Item>
                </Link>
                <Link to="/Archie_Swap" className='text-decoration-none'>
                  {" "}
                  <NavDropdown.Item href="#action/3.2" className="all_hvr">
                    Archie Swap
                  </NavDropdown.Item>
                </Link>
                <Link to="/Archie_Scan" className='text-decoration-none'>
                  {" "}
                  <NavDropdown.Item href="#action/3.3" className="all_hvr">
                    Archie Scan
                  </NavDropdown.Item>
                </Link>
                <Link to="/ArcCoin" className='text-decoration-none'>
                  {" "}
                  <NavDropdown.Item href="#action/3.4" className="all_hvr">
                    ArcCoin ($ARC)
                  </NavDropdown.Item>
                </Link>
                <Link to="/WarcCoin" className='text-decoration-none'>
                  {" "}
                  <NavDropdown.Item href="#action/3.5" className="all_hvr">
                    WarcCoin ($WARC)
                  </NavDropdown.Item>
                </Link>
                <Link to="/archie_aa" className='text-decoration-none'>
                  {" "}
                  <NavDropdown.Item href="#action/3.6" className="all_hvr">
                    Archie Aggregaor
                  </NavDropdown.Item>
                </Link>
                <Link to="/ArchiePlace" className='text-decoration-none'>
                  {" "}
                  <NavDropdown.Item href="#action/3.7" className="all_hvr">
                    ArchiePlace
                  </NavDropdown.Item>
                </Link>
                <Link to='ArchieWallet' className='text-decoration-none'>
                <NavDropdown.Item href="#action/3.8" className="all_hvr">
                  ArchieWallet
                </NavDropdown.Item>
                </Link>
                <Link to='/ArchieMeta' className='text-decoration-none'>
                <NavDropdown.Item href="#action/3.9" className="all_hvr">
                  ArchieMeta
                </NavDropdown.Item>
                </Link>
                <Link to ='/isl_arch' className='text-decoration-none'>
                <NavDropdown.Item href="#action/3.10" className="all_hvr">
                  Island of Archie
                </NavDropdown.Item></Link>
                <Link to='/play' className='text-decoration-none'>
                <NavDropdown.Item href="#action/3.11" className="all_hvr">
                  Play 2 Win
                </NavDropdown.Item></Link>
                <Link to= '/archieve_e' className="text-decoration-none">
                <NavDropdown.Item href="#action/3.12" className="all_hvr">
                  Archie Ecommerce
                </NavDropdown.Item></Link>
                <Link to='/Archie_Reality' className='text-decoration-none'>
                <NavDropdown.Item href="#action/3.13" className="all_hvr">
                  Archie Reality
                </NavDropdown.Item></Link>
              </NavDropdown>

              <NavDropdown
                title={<span className="header_links zind">ARCHIE-NFT</span>}
                id="collasible-nav-dropdown"
              >
                <NavDropdown.Item className="all_hvr" href="#action/3.1">
                  Archieneko NFT
                </NavDropdown.Item>
                <NavDropdown.Item className="all_hvr" href="#action/3.2">
                  ArchieMeta NFT
                </NavDropdown.Item>
                <NavDropdown.Item className="all_hvr" href="#action/3.3">
                  We Care Kitty NFT
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown
                title={<span className="header_links zind">DOCUMENTS</span>}
                id="collasible-nav-dropdown"
              >
           <Link to='/token_allocation' className="text-decoration-none">    <NavDropdown.Item className="all_hvr" href="#action/3.1">
                  Token Allocations
                </NavDropdown.Item></Link> 
              <Link to='/tokenomics' className="text-decoration-none">  <NavDropdown.Item className="all_hvr" href="#action/3.2">
                  Tokenomics
                </NavDropdown.Item></Link>
                <Link to="/Road_map" className="text-decoration-none">
                  {" "}
                  <NavDropdown.Item className="all_hvr" href="#action/3.3">
                    Road Map
                  </NavDropdown.Item>
                </Link>
                <NavDropdown.Item className="all_hvr" href="#action/3.4">
                  Audit Report
                </NavDropdown.Item>
              <Link to ='/white_paper' className="text-decoration-none">  <NavDropdown.Item className="all_hvr" href="#action/3.5">
                  White Paper
                </NavDropdown.Item></Link>
                <Link to='/Team_kyc' className=" text-decoration-none"><NavDropdown.Item className="all_hvr" href="#action/3.6">
                  Team / KYC
                </NavDropdown.Item></Link>
              </NavDropdown>

              <Nav.Link href="#features"  className="header_link_by_arch">
               
                <Button    className="header_link_by_arch button_arrrr" onClick={() => setModalShow(true)}>
                BUY $ARCHIE
      </Button>

      <Buy_model
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
              </Nav.Link>

              <NavDropdown
                title={<span className="header_links zind">STACKING</span>}
                id="collasible-nav-dropdown"
              >
                <Link to="/Archie_Staking" className="text-decoration-none">
                  {" "}
                  <NavDropdown.Item className="all_hvr" href="#action/3.1">
                    Archie Staking
                  </NavDropdown.Item>
                </Link>
              <Link to ='/nft_staking' className="text-decoration-none">   <NavDropdown.Item className="all_hvr" href="#action/3.2">
                  NFT Staking
                </NavDropdown.Item></Link>
              </NavDropdown>

              <Link to="/WECAREKITTY" className="text-decoration-none">
                {" "}
                <Nav.Link href="#features" className="header_links">
                  WECAREKITTY
                </Nav.Link>
              </Link>

              <NavDropdown
                className="info_list"
                title={<AiFillInfoCircle className="info_icon mb-1" />}
                id="collasible-nav-dropdown"
              >
                <NavDropdown.Item
                  className="all_hvr text-center"
                  href="#action/3.1"
                >
                  <BsTelegram className="icon_edt" />
                </NavDropdown.Item>
                <NavDropdown.Item
                  className="all_hvr text-center"
                  href="#action/3.2"
                >
                  <BsTwitter className="icon_edt" />
                </NavDropdown.Item>
                <NavDropdown.Item
                  className="all_hvr text-center"
                  href="#action/3.3"
                >
                  <FaDiscord className="icon_edt" />
                </NavDropdown.Item>
                <NavDropdown.Item
                  className="all_hvr text-center"
                  href="#action/3.4"
                >
                  <BsInstagram className="icon_edt" />
                </NavDropdown.Item>
                <NavDropdown.Item
                  className="all_hvr text-center"
                  href="#action/3.5"
                >
                  <BsFacebook className="icon_edt" />
                </NavDropdown.Item>
                <NavDropdown.Item
                  className="all_hvr text-center"
                  href="#action/3.6"
                >
                  <FaTiktok className="icon_edt" />
                </NavDropdown.Item>
                <NavDropdown.Item
                  className="all_hvr text-center"
                  href="#action/3.7"
                >
                  <BsReddit className="icon_edt" />
                </NavDropdown.Item>
                <NavDropdown.Item
                  className="all_hvr text-center"
                  href="#action/3.8"
                >
                  <BsYoutube className="icon_edt" />
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown
                className="info_list_2"
                title={<span>DAPP</span>}
                id="collasible-nav-dropdown"
              >
                <NavDropdown.Item className="all_hvr" href="#action/3.1">
                  comming soon
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            {/* <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
