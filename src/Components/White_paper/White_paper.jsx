import React from "react";
import pdf from "../Assests/pdf.png";
import "../ARHCHIE_PART/ARCHIE_PART.css";

function White_paper() {
  return (
    <div className="py-5 blackh">
      <div className="container">
        <div className="row justify-content-center  px-3   ">
          <div className="col-md-6 arhie_pic">
            <img src={pdf} alt="" className="w-100" />
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-6 d-flex justify-content-center">
            <a
              href="https://cdnc.heyzine.com/flip-book/pdf/8dd5bb0f00dff6139fcde16c9c1b129d6fc1a20a-22.pdf"
              className="text-decoration-none w-50  my-5"
            >
              {" "}
              <button className="latest_news_bt button w-100">
                Download Pdf{" "}
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default White_paper;
