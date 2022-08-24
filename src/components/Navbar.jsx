import React from 'react'

const Navbar = () => {
  return (
      <nav class="navbar navbar-dark bg-dark">
          <div class="container-fluid">
              <a class="navbar-brand" href="/" rel='rel_noopener' style={{ alignItems: 'center'}}>
                  <img src="https://img.freepik.com/free-vector/car-ownership-usage-isometric-composition-with-bubble-protected-car-icon-with-sign-paper-agreement_1284-54551.jpg?w=75" style={{ borderRadius: '50px'}}/>
                      <h1 className='nav_title d-inline mx-2'>ParkIn</h1>
              </a>
          </div>
      </nav>
  )
}

export default Navbar
