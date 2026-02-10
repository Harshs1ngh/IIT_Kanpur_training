import { Outlet } from "react-router-dom"

function OurServices()
{
  return (
    <>
      <hr color='orange' size='10' />
      <h2 align='center'>Our Services</h2>
      <hr color='green' size='10' />
      
      <Outlet />
    
    
    </>

  )
}

export default OurServices