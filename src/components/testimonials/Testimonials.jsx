import React from 'react';
import Me from '../../images/r1.png';
import You from '../../images/r2.png';
const Testimonials = () => {
  return (
    <div class="container overflow-hidden text-center" id='testimonials'>
    <h1 style={{"fontFamily":"rubik","textDecoration":"underline","margin":"80px 0 50px 0"}}>Testimonials</h1>
    <div class="row gx-5">
      <div class="col">
       <div class="p-3"><img src={Me} alt='.' /></div>
      </div>
      <div class="col">
        <div class="p-3"><img src={You} alt='.'/></div>
      </div>
    </div>
  </div>
  )
}

export default Testimonials