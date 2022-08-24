import React, { useContext, useEffect } from 'react'
import { parkingContext } from '../../context/parkingState'
import CarItem from './CarItem'

const CarParkList = () => {
    const { carsParked } = useContext(parkingContext)
    useEffect(() => {
      
    }, [carsParked])
    
  return (
    <div>
        {(carsParked.length === 0 ) && <div className='text-center mt-2'>
            <h2>No Cars Parked!</h2>
            </div>}
          {(carsParked.length !== 0) && <div className="row mt-2" >
            <header className='text-center' >
                  <h3 style={{ fontFamily: 'monospace', fontWeight: '800' }}>Total Cars Parked {carsParked.length}</h3>
            </header>
            {carsParked.map(car => {
                return (
                    <div key={car.num_plate} className="col-sm-6 col-md-4">
                        <CarItem car={car}/>
                    </div>
                )
            })}
          </div>}
        
    </div>
  )
}

export default CarParkList