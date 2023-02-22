import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './Buy_model.css'
// import Button from 'react-bootstrap/Button';
import { AiOutlineArrowRight } from "react-icons/ai";

function StaticExample() {
  return (
    <div
      className="modal show bg_model"
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal.Dialog>
        <Modal.Header >
          <Modal.Title className='p'>Where to Buy</Modal.Title>
        </Modal.Header>
        

          <Button variant="secondary" size="lg" className='text-white bt_css mt-4'>
          COMING SOON <AiOutlineArrowRight/>
        </Button>
          <Button variant="secondary" size="lg" className='text-white bt_css mt-2 mb-5'>
          COMING SOON <AiOutlineArrowRight/>
        </Button>
        
        
       <Modal.Footer>
          <button type="button" class="btn btn-lg text-white close px-4">CLOSE </button>
        </Modal.Footer>
        
      </Modal.Dialog>
      
    </div>
  );
}

export default StaticExample;
