import React from 'react'

function Latest_news_slides({title_la,para_la,btn_la}) {
  return (
    <div>
         <h4 className="clr ">{title_la}</h4>
          <p className="fs-5 text-white">
            {" "}
          {para_la}
          </p>
          <div className="latest_news_btn">
            <button className="p-3 w-50">{btn_la}</button>
          </div>
      
    </div>
  )
}

export default Latest_news_slides
