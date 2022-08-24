import React, { useContext, useEffect } from 'react'
import { parkingContext } from '../../context/parkingState'
import CarItem from './CarItem'

const CarUnparkList = () => {
    const { carsLeft } = useContext(parkingContext)
    useEffect(() => {

    }, [carsLeft])
  return (
      <div className="row">
          {(carsLeft.length === 0) && <div className='text-center mt-2'>

          </div>}
          {(carsLeft.length !== 0) && <div className="row" >
              <header className='text-center' >
                  <h3 style={{ fontFamily: 'monospace', fontWeight: '800' }}>Total Cars Unparked {carsLeft.length}</h3>
              </header>
              {carsLeft.map(car => {
                  return (
                      <div className="col-sm-6 col-md-4">
                          <CarItem car={car} />
                      </div>
                  )
              })}
          </div>}
    </div>
  )
}

export default CarUnparkList