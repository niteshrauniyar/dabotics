import React from 'react'

const Navbar = () => {
  return (
<nav  className="navbar navbar-expand-lg navbar-dark bg-success" id='home'>
  <div  className="container-fluid">
    <a style={{"font-family": 'Rubik'}} className="navbar-brand fs-3 mx-3" href="#">BABA PANIPURI AND CHATPAT </a>
    <button  className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span  className="navbar-toggler-icon"></span>
    </button>
    <div  className="collapse navbar-collapse" id="navbarNav">
      <ul  className="navbar-nav ms-auto">
        <li  className="nav-item">
          <a style={{"font-family": 'Rubik'}} className="nav-link fs-5 mx-3" aria-current="page" href="#">Home</a>
        </li>
        <li  className="nav-item">
          <a style={{"font-family": 'Rubik'}} className="nav-link fs-5 mx-3" href="#menu">Items</a>
        </li>
        <li  className="nav-item">
          <a style={{"font-family": 'Rubik'}} className="nav-link fs-5 mx-3" href="#testimonials">Testimonials</a>
        </li>
        <li  className="nav-item">
          <a style={{"font-family": 'Rubik'}} className="nav-link fs-5 mx-3" href="#location">Location</a>
        </li>
        <li  className="nav-item">
          <a style={{"font-family": 'Rubik'}}  className="nav-link fs-5 mx-3" href="#foot">Contact</a>
        </li>
    
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar