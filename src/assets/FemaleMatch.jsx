import React from 'react'
import { useEffect, useState } from 'react';
import { BiSearchAlt} from "react-icons/bi";
import { NavLink, Outlet } from 'react-router-dom';

// import EachFemale from './EachFemale';
import './female.css'

export default function FemaleMatch() {
  const [femaleUser, setFemaleuser]= useState([])
  const [ page , setPage]=useState(1)

  const [isLoading, setIsloading]=useState(true)
  
  useEffect(()=>{
    setIsloading(true)
    fetch('https://randomuser.me/api/?results=70')
    .then((res) => res.json())
    .then((res)=>{
      // console.log(res)
      setFemaleuser(res.results)
      setIsloading(false)
      // console.log(femaleUser)
  

    })
  }, [])

  const arrays =femaleUser.filter((user)=>{
    const arr = Object.entries(user)
     return(
      arr[0].includes('female')
     )
      })
      console.log(arrays)

  
  const PerPage= 6;
    const total = arrays.length
  const pages = Math.ceil(total/PerPage)
  const skip = page * PerPage - PerPage;
  
  
  if(isLoading)
  return(
    <h1>Loading... </h1>

  )


  // setFemaleuser(arrays)

  // const arrs= Object.entries(femaleUser)
  // if( arrs.filter((arr)=>{
  //   return(arr[0].includes('male'))
  // }))
  // return
 
  // filter((user)=>{
  //   const arr = Object.entries(user)
  //   console.log(arr)
  //   return(
  //     arr[0].includes('female')
  //   )
  // const arr= Object.entries(femaleUser)
  // console.log(arr)
 

  return (
    <div className='female'>
        <div className='search-bar'>
            <input type='text' placeholder='Search' className='search' />
            <BiSearchAlt className='search-icon' />
        </div>
        <div className='user' >
          {arrays.slice(skip, skip + PerPage).
          map((user)=>{ 
            const {name, phone, gender, picture,location,id,login, dob}= user
            return(
              <div className='each-user'>
               <img src={picture.large} alt='image'  className='pic'/>
               <div className='text'>
               <h2 className='name'>{name.first} {name.last} </h2>
               <p> Location:  {location.country} </p>
               <p> Age : {dob.age} </p>
               {/* <p>{phone} </p> */}
               <NavLink key={login.uuid} className='links' to={{
                pathname: `female/${phone}`
               }}><h4>More..</h4> </NavLink>
               </div>
              </div>
            )

          })}
          
          
        
        </div>
        {<button  className='btn2' disabled={page<=1} aria-disabled={page<=1} onClick={()=> setPage((prev)=> prev -1)}>Prev</button>  }
          {Array.from({length : pages}, (value, index)=> index + 1).map((each)=> (
            <button  className='btn1' onClick={()=> setPage(each)}>{each} </button>
          ))}
           {
            <button className='btn2' disabled={page>=pages} aria-disabled={page>=pages}
            onClick={()=> setPage((prev) => prev + 1)}>Next</button>
          }
          {<h4>You are currently in {page} of {pages} </h4>}
        <Outlet/>

  
    </div>
    
  )
}
