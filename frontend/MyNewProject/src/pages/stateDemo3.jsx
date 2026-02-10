import { useState } from "react"
import { Outlet } from "react-router-dom"

function StateDemo3()
{ 
  let userNames = ["Amit","Sachin"]
  return (

    <>      
        <h3 align='center'>Demo 3</h3>     
        <hr color='navy' />

        <div className="alert alert-info text-center">                   
          { (userNames.length > 0 ) ? 
          (
            <ul>
                  {
                    userNames.map(name=>(
                      <li>{name}</li>
                    ))
                  }
            </ul>
          ) : "List is Empty..."  }    

        </div>   

        <div class='alert alert-warning'>

          { userNames.length > 0  && ( userNames )  }



        </div>
    
    </>

  )
}

export default StateDemo3