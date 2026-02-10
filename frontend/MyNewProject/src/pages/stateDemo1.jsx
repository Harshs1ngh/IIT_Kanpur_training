import { useState } from "react"
import { Outlet } from "react-router-dom"

function StateDemo1()
{

  console.log("Hi ... ");

  // let num = 5
  
  

  // function myfun()
  // {
  //    ++num;
  //    console.log(num);     
  // }

  let arr = useState(5)
  console.log(arr);

  function myfun()
  {
      arr[1](arr[0]+1)
      console.log(arr[0]);
      
  }

  return (

    <>      
        <h3 align='center'>Demo 1</h3>     
        <hr color='navy' />

        <div className="alert alert-info text-center">
          Num={arr[0]}
          {/* <button onClick={myfun}  className="btn btn-info"> 
            Increment 
          </button> */}

          <button onClick={myfun}  className="btn btn-info ml-3"> 
            Increment 
          </button>

        </div>


    
    
    </>

  )
}

export default StateDemo1