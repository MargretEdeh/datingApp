import React from 'react'
import call from './call.svg'
import { useNavigate, useParams } from 'react-router-dom'

export default function EachMale() {
    const {maleId}= useParams()
    const navigate = useNavigate()

  return (
    <div className='digit'>
<div className='num'>
<h1 className='phone'> Start a conversation with me by messaging me on: <br/> {maleId} </h1>
<button onClick={()=> navigate('/findLove/male')} className='btn2'>Go Back</button>
</div>
<img src={call} alt='img' className='img2'/>
    </div>
  )
}
