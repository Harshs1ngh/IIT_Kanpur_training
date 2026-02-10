import {Link} from 'react-router-dom'
function MyNavBar(){

  return(
    <>
    
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <Link className="navbar-brand" to="#">Navbar</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="/home">Home</Link>
      </li>
      
      <li className="nav-item">
        <Link className="nav-link" to="/about">About Us</Link>
      </li>

      <li className="nav-item">
        <Link className="nav-link" to="/contact">Contact Us</Link>
      </li>

      <li className="nav-item dropdown">
        <Link className="nav-link dropdown-toggle" to="/service" role="button" data-toggle="dropdown" aria-expanded="false">
          Our Services
        </Link>
        <div className="dropdown-menu">
          <Link className="dropdown-item" to="/service/web">Web App Development</Link>
          <Link className="dropdown-item" to="/service/mob">Mobile App Development</Link>          
          <Link className="dropdown-item" to="/service/cloud">Cloud Services</Link>
        </div>
      </li>
        {/* State management Demo Links */}
      <li className="nav-item dropdown">
        <Link className="nav-link dropdown-toggle" to="" role="button" data-toggle="dropdown" aria-expanded="false">
          State Management Demos
        </Link>
        <div className="dropdown-menu">
          <Link className="dropdown-item" to="/state/demo1">Demo 1</Link>
          <Link className="dropdown-item" to="/state/demo2">Demo 2</Link>
          <Link className="dropdown-item" to="/state/demo3">Demo 3</Link>
          <Link className="dropdown-item" to="/state/demo4">Demo 4</Link>
          
        </div>
      </li>
      
      <li className="nav-item">
        <Link className="nav-link">Link</Link>
      </li>
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
    </>
  )
}

export default MyNavBar