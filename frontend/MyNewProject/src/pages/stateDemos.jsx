import { Outlet } from "react-router-dom"

function StateDemos()
{
  return (

    <>
      <hr color='orange' size='10' />
      <h2 align='center'>State Management Demo</h2>
      <hr color='green' size='10' />
      <Outlet />
    
    
    </>

  )
}

export default StateDemos