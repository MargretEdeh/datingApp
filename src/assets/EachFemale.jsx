import React from 'react'
import call from './call.svg'
import { useNavigate, useParams } from 'react-router-dom'

export default function EachFemale() {
    const {userId}= useParams()
    const navigate = useNavigate()
    console.log(userId)

  return (
    <div className='digit'>
<div className='num'>
<h1 className='phone'> Start a conversation with me by messaging me on: <br/> {userId} </h1>
<button onClick={()=> navigate('/findLove')} className='btn2'>Go Back</button>
</div>
<img src={call} alt='img' className='img2'/>
    </div>
  )
}
