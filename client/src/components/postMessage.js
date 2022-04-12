import React,{useState,useEffect} from 'react'
import CreateMessage from './CreateMessage';
import Displaymessage from './Displaymessage';
import {useDispatch} from 'react-redux';
import { fetchAll } from '../Actions/postMessage';


function Postmessage() {
    
  

  const dispatch=useDispatch();
  
  useEffect( ()=>{
    dispatch(fetchAll());

  },[])

    
    
  return (
    <div>
        <div className='w-full flex justify-center'>
          <div className='w-3/6 bg-slate-50 px-10 py-5 flex justify-center items-center shadow-lg '>
            <div className=''>

              <h1 className=' text-3xl font-bold ' >Post Message</h1>
              
            </div>
          </div>
        </div>
        <div className='grid grid-cols-2 gap-2'>
          <div>
            <CreateMessage/>
          </div>
          <div>
            <Displaymessage/>
          </div>
       
        </div>
        

       
    </div>
  )
}

export default Postmessage