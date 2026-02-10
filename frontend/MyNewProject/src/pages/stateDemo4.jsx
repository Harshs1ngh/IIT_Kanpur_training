import { useState } from "react"
import { Outlet } from "react-router-dom"

function StateDemo4()
{ 
  
  const [isLoading , setIsLoading] = useState(false)

  function btnClick()
  {
    setIsLoading(true)
    setTimeout(()=>{
      setIsLoading(false)
    },3000)  
  }

  return (

    <>      
        <h3 align='center'>Demo 4</h3>     
        <hr color='navy' />

        <button onClick={btnClick}>Show Data</button>

        { isLoading && <span className="spinner spinner-border" >.</span> }
        

        
    </>

  )
}

export default StateDemo4