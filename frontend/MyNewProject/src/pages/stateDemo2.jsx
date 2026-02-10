import { useState } from "react"
import { Outlet } from "react-router-dom"

function StateDemo2()
{
  const [num , setNum ] =  useState(0)

  function myfun()
  {
      setNum(num+1)
  }

  return (

    <>      
        <h3 align='center'>Demo 2</h3>     
        <hr color='navy' />

        <div className="alert alert-info text-center">         
          
          Num={num}

          <button onClick={myfun} className="btn btn-info ml-3"> 
            Increment Button 1 
          </button>

          <button onClick={()=>setNum(num+5)} className="btn btn-warning ml-3"> 
            Increment Button 2
          </button>

        </div>


    
    
    </>

  )
}

export default StateDemo2