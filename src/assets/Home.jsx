import React from 'react'
import couple from './couple.svg'

export default function Home() {
  return (
    <div className='home'>
      <div className='intro' >
   <p>Everyone deserves to Love and be  Loved</p>
   <h1>Get the Best Dating Experience </h1>
   <h2>Meet who Match your Energy</h2>
   <div className='details' >
    <p className='ptag'>
      Distance shouldn't be a barrier to Love. Share your passions and stories
      breakdown the walls in your heart and you never know,  You May just find Love!!! 
    </p>

   </div>
   <div className='input' >
   <input type='email' placeholder='Enter your Email'/> 
<button className='btn'>Get Started</button>
   </div>
      </div>
         <img src={couple} className='img' />
         <div className='footer'>
          <div className='ftag'>
            <h1 className='h1Font'>15k+</h1>
            <p className='p2tag'>Dates and matches made everyday</p>
          </div>
          <div className='ftag'>
          <h1 className='h1Font2'>1000</h1>
          <p className='p2tag'>New Members signup everyday</p>
          </div>
          <div className='ftag'>
          <h1 className='h1Font'>1M+</h1>
          <p className='p2tag'>Members from around the world</p>
          </div>
         </div>

    </div>
  )
}
