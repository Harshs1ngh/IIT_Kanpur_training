import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import {Routes , Route} from 'react-router-dom'
import Dashboard from './pages/dashboard'
import MyNavBar from './components/Nav'
import Home from './pages/home'
import AboutUs from './pages/about'
import ContactUs from './pages/contact'
import WebAppDev from './pages/webApp'
import OurServices from './pages/services'
import MobileAppDev from './pages/mobApp'
import CloudServices from './pages/cloudSer'
import StateDemos from './pages/stateDemos'
import StateDemo1 from './pages/stateDemo1'
import StateDemo2 from './pages/stateDemo2'
import StateDemo3 from './pages/stateDemo3'
import StateDemo4 from './pages/stateDemo4'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>    
      <MyNavBar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />        

        <Route path='/service' element={<OurServices />} >
            <Route path='web' element={<WebAppDev />} />
            <Route path='mob' element={<MobileAppDev />} />
            <Route path='cloud' element={<CloudServices />} />
        </Route>

        <Route path='/state' element={<StateDemos />} >
            <Route path='demo1' element={<StateDemo1 />} />
            <Route path='demo2' element={<StateDemo2 />} />
            <Route path='demo3' element={<StateDemo3 />} />
            <Route path='demo4' element={<StateDemo4 />} />
        
        
        </Route>



      </Routes>
    </>
  )
}

export default App
