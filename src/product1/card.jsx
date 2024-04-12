import React from 'react'
import "./card.css"
export default function Card({val}) {
  return (
    <div>
               <div className='img'><img src={val.img}/></div>
              <p>{val.name1}</p>
              <p>{val.name2}</p>
    </div>
  )
}
