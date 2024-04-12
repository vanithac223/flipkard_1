'use client'
import React, { useState } from 'react'
import { datas } from '@/data/data'
import { data1 } from '@/data1/data1'
import Card from './card'
import Slider from '@/app/slider/slider'

export default function Product1() {
  const [data] = useState(datas)
  const [datas1] = useState(data1)

  return (
    <div className='container mx-auto'>
      <div className='df mt-h jc jcsb mx-w'>
        {
          data.map((val) => {
            return (
              <div key={val.id}>

                <img src={val.img} />
                <p>{val.name}</p>
              </div>
            )
          })
        }
      </div>
      <div className='mrg-top'>
        <Slider/>
      </div>
      {/* this is second part */}
      <div className='mrg-top mx-w'>
        <p>Best Deals on Smartphones</p>
      </div>
      <div className='df jc mrg-top mx-w'>
        {
           datas1.map((val)=>{
            return(
              <Card val={val} key={val.id}/>
              
            )
           })
        }
      </div>
    </div>
  )
}
