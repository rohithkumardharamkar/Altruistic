
import {BrowserRouter,Routes,Route, Link} from 'react-router-dom'
import Login from './components/Login';
import Reg from './components/Reg';
import Profile from './components/Profile';
import Home from './components/Home';
import Nav from './components/Nav';
import Search from './components/Search';
import Blogs from './components/Blogs';
import ABlog from './components/ABlogs';
import Drive from './components/Drive';
import { useState } from 'react';
import Ct from './components/Ct';
import Logout from './components/Logout';
import Donate from './components/Donate';
import Quiz from './components/Quiz';
import Drives from './components/Drives';
import useOnline from './utils/useOnline';
import Update from './components/Update';
import Donars from './components/Donars';

function App()
{
  let [cont,setCont]=useState({})
  let updcont=(obj)=>
  {
    setCont({...cont,...obj})
  }
  let obj={"cont":cont,"updcont":updcont}
  let r=useOnline()
  if(r==false)
  {
    return(<div className='status'>Please Connect to the Stable internet Connection or Check your internet connection</div>)
  }
  

  return(
  
    <div>
      <BrowserRouter>
    
      <Ct.Provider value={obj}>
    { obj.cont.token && <Nav/>}
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/search' element={<Search/>}/>
        <Route path='/' element={<Login/>}/>
        <Route path='/reg' element={<Reg/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/blogs' element={<Blogs/>}/>
        <Route path='/ablogs' element={<ABlog/>}/>
        <Route path='/addrive' element={<Drive/>}/>
        <Route path='/quiz' element={<Quiz/>}/>
        <Route path='/donations' element={<Donate/>}/>
        <Route path='/logout' element={<Logout/>}/>
        <Route path='/drives' element={<Drives/>}/>
        <Route path='/update' element={<Update/>}/>
        <Route path='/users' element={<Donars/>}/>
      </Routes>
      </Ct.Provider>
    
     
      </BrowserRouter>
     

    </div>
  )
}
export default App;

