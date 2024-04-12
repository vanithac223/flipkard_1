import Image from 'next/image'
import React from 'react'
import "./navbar.css"
export default function Navbar() {
  return (
    <div>
      <div className='container dis-none mx-auto fx'>
        <div className='jcsb df pd'>
          <div>
            <Image src={"/image/fkheaderlogo_exploreplus-44005d.svg"} alt='logo' width={150} height={150} />
          </div>
          <div>
            <input placeholder='Search for product,Brands and more...' className='pd md' style={{ width: '690px' }} />
          </div>
          <div className='mg df'>
            <div>
              <img src='/image/user logo.svg' alt='login image' width={25} height={25} />
            </div>
            <div>
              <p className='text-2xl'>login</p>
            </div>
          </div>
          <div className='mg df'>
            <div>
              <img src='/image/header_cart-eed150.svg' alt='cart image' width={25} height={25} />
            </div>
            <div><p className='text-2xl'>cart</p></div>
          </div>
          <div className='mg df'>
            <div><img src='/image/seller.svg' alt='Became a seller image' width={25} height={25} /></div>
            <div><p className='text-2xl'>Became a seller</p></div>
          </div>
          <div>
            <img src='/image/3 dot.svg' alt='3 dot image' />
          </div>
        </div>
      </div>
    </div>
  )
}
