import React from 'react'
import './App.css'
import { GiLoveMystery} from "react-icons/gi";
import { NavLink, Route, Routes } from 'react-router-dom'
import Home from './assets/Home';
import FindMate from './assets/FindMate';
import FemaleMatch from './assets/FemaleMatch';
import EachFemale from './assets/EachFemale';
import EachMale from './assets/EachMale';
import MaleMatch from './assets/MaleMatch';



export  class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    // logErrorToMyService(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children; 
  }
}

const Header =()=>{
  return(
    <div className='header'>
      <div className='logo'>
        <GiLoveMystery className='love-logo'/>
        <h3>MatchFinder</h3>
      </div>
      <div><nav>
        <NavLink style={({isActive})=> isActive ? {color:'white'} : {color:""}} to='/' end className='nav'>Home</NavLink>
        <NavLink style={({isActive})=> isActive ? {color:'white'} : {color:""}}  to='/findLove' className='nav'>FindLove</NavLink>
        <NavLink style={({isActive})=> isActive ? {color:'white'} : {color:""}}  to='/contact' className='nav'>Contact</NavLink>
        <NavLink style={({isActive})=> isActive ? {color:'white'} : {color:""}}  to='/privacy' className='nav'>Privacy</NavLink>
        </nav> </div>
    </div>
  )
}
const Contact= ()=>{
  return(
    <h1>Contact</h1>
  )
}

const Privacy =()=>{
  return(
    <h1>Your privacy means alot to us</h1>
  )
}
const ErrorPage=()=>{
  return(
    <h1>Error!! Page not Found</h1>
  )
}

export default function App() {
  return (
    <div className='App'>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/> }/>
        <Route path='/findLove' element={<FindMate/>}>
          <Route index element={<FemaleMatch/>}/>
          <Route path='female' element={<FemaleMatch/>}/>
          <Route path='female/:userId' element ={<EachFemale/>}/>
          <Route path='male' element={<MaleMatch/>}/>
          <Route path='male/:maleId' element={<EachMale/>}/>
        </Route>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/privacy' element={<Privacy/>}/>
        <Route path='*' element={<ErrorPage/>}/>
      </Routes>
    </div>
  )
}


