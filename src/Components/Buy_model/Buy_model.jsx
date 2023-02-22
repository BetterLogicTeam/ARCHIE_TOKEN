import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "./Buy_model.css"
import { AiOutlineArrowRight } from "react-icons/ai";

export default function Buy_model(props) {
  return (
    <div>
    
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      // className='blackh'
    >
      <Modal.Header closeButton>
      <Modal.Title className='p clr'>Where to Buy</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <button className=' modal_btn_here '> Coming soon 
<AiOutlineArrowRight/>
</button>
        <button className=' modal_btn_here mt-4'> Coming soon <AiOutlineArrowRight/></button> 
      </Modal.Body>
      <Modal.Footer>
        <Button className='close_modal' onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>



    </div>
  )
}
