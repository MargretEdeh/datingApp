import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import './findmate.css'

export default function FindMate() {
  return (
    <div className='findmate'>
      <div className='side-nav'>
<ul>
  <li >
  <NavLink className='link' to='female'>Female Match</NavLink>
  </li>
  <ul>
    <li className='list'>Overview</li>
    <li className='list'>Single</li>
    <li className='list' >Prefrences</li>
  </ul>
  <li ><NavLink className='link'  to='male' >Male Match</NavLink></li>
  <ul>
  <li className='list'>Overview</li>
    <li className='list'>Single</li>
    <li className='list' >Prefrences</li>
  </ul>
  <li><NavLink  className='link' to='friend' >Friend Zone</NavLink></li>
<ul>
<li className='list'>Overview</li>
    <li className='list'>Situationhip</li>
    <li className='list' >Future Goals</li>
    <li className='list' >Prefrences</li>

</ul>
  </ul>        

      </div>
      <Outlet/>
    </div>
  )
}
