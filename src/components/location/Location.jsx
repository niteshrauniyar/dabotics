import React from 'react'

const Location = () => {
  return (
    <div id='location'>
        <h1 style={{"fontFamily":"rubik","textAlign":"center","textDecoration":"underline","margin":"80px 0 50px 0"}}>Location</h1>
        <div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.5476858110787!2d84.42182867459722!3d27.700371425800675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3994fbe44ae62d61%3A0xc02b8fafe8e8446e!2sBaba%20panipuri%20and%20chatpat%20center!5e0!3m2!1sen!2snp!4v1680781681531!5m2!1sen!2snp" width="100%" height="500px" style={{"border":"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </div>
  )
}

export default Location;