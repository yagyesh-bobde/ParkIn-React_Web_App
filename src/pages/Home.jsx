import React from 'react'
import AddCar from '../components/AddCar'
import CarParkList from '../components/CarCards/CarList'
import CarUnparkList from '../components/CarCards/CarUnparkList'

const Home = () => { 
  return (
    <div className='row w-100 home_page'>
      <div className="col-sm-12 col-md-4 d-flex my-4" >
        <div className='m-auto w-75' style={{ }}>
            <AddCar />
        </div>
      </div>
          <div className="col-sm-12 col-md-8" style={{ overflowY: 'auto', maxHeight: '80vh' }}>
        <div className="row my-4" >
           <CarParkList />
        </div>
              <div className="row h-40 my-4">
            <CarUnparkList />
        </div>
      </div>
    </div>
  )
}

export default Home
