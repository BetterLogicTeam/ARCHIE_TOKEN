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

export default function Header() {
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
                <NavDropdown.Item href="#action/3.1" className="all_hvr">
                  Archie Chain (ARC)
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2" className="all_hvr">
                  Archie Swap
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3" className="all_hvr">
                  Archie Scan
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4" className="all_hvr">
                  ArcCoin ($ARC)
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.5" className="all_hvr">
                  WarcCoin ($WARC)
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.6" className="all_hvr">
                  Archie Aggregaor
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.7" className="all_hvr">
                  ArchiePlace
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.8" className="all_hvr">
                  ArchieWallet
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.9" className="all_hvr">
                  ArchieMeta
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.10" className="all_hvr">
                  Island of Archie
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.11" className="all_hvr">
                  Play 2 Win
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.12" className="all_hvr">
                  Archie Ecommerce
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.13" className="all_hvr">
                  Archie Reality
                </NavDropdown.Item>
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
                <NavDropdown.Item className="all_hvr" href="#action/3.1">
                  Token Allocations
                </NavDropdown.Item>
                <NavDropdown.Item className="all_hvr" href="#action/3.2">
                  Tokenomics
                </NavDropdown.Item>
              <Link to ='/Road_map' className="text-decoration-none">  <NavDropdown.Item className="all_hvr" href="#action/3.3">
                  Road Map
                </NavDropdown.Item>
                </Link>
                <NavDropdown.Item className="all_hvr" href="#action/3.4">
                  Audit Report
                </NavDropdown.Item>
                <NavDropdown.Item className="all_hvr" href="#action/3.5">
                  White Paper
                </NavDropdown.Item>
                <NavDropdown.Item className="all_hvr" href="#action/3.6">
                  Team / KYC
                </NavDropdown.Item>
              </NavDropdown>

              <Nav.Link href="#features" className="header_link_by_arch">
                BUY $ARCHIE
              </Nav.Link>

              <NavDropdown
                title={<span className="header_links zind">STACKING</span>}
                id="collasible-nav-dropdown"
              >
              <Link to='/Archie_Staking' className="text-decoration-none">  <NavDropdown.Item className="all_hvr" href="#action/3.1">
                  Archie Staking
                </NavDropdown.Item></Link>
                <NavDropdown.Item className="all_hvr" href="#action/3.2">
                  NFT Staking
                </NavDropdown.Item>
              </NavDropdown>

          <Link to ='/WECAREKITTY' className="text-decoration-none">  <Nav.Link href="#features" className="header_links">
                WECAREKITTY
              </Nav.Link></Link>  

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
