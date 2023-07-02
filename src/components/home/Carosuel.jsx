import React from 'react'

const Carosuel = () => {
  return (
<div  id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel" style={{objectFit:"contain !important"}}>
  <div className="carousel-inner" id='carosuel'>
    <div className="carousel-item active" data-bs-interval="10000">
      <img src="https://static.toiimg.com/thumb/53571811.cms?width=1200&height=900" className="d-block w-100" style={{"height":"500px" , "width":"100%", filter: "brightness(30%)"}} alt="..."/>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img src="https://cdn.pixabay.com/photo/2019/11/04/08/14/food-4600495__480.jpg" className="d-block w-100 img2" style={{"height":"500px" , "width":"100%", filter: "brightness(30%)"}} alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://ik.bebodywise.com/mosaic-wellness/image/upload/f_auto,w_1000,c_limit/v1644216155/BW%20BLOG/Untitled-design---2022-02-07T121140.260_11zon.jpg" className="d-block w-100 img3" style={{"height":"500px" , "width":"100%", filter: "brightness(30%)"}} alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
  )
}

export default Carosuel