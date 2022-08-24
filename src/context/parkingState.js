import { createContext, useState } from 'react'

export const parkingContext = createContext();

const ParkingState = (props) => {
    const [carsParked, setcarsParked] = useState([])
    const [carsLeft, setcarsLeft] = useState([])

    const parkCar = ( num_plate , driver_name, time) => {
        const newList = [...carsParked];
        newList.push({
            num_plate,
            driver_name,
            time,
            parked: true
        })
        setcarsParked(newList)
    }

    const unparkCar = ( num_plate ) => {
        // searching in the carsparked array
        const unpark = carsParked.filter(car => car.num_plate === num_plate )

        const carUnpark = unpark[0];
        carUnpark.parked = false;
        const newList = [...carsLeft]
        newList.push(carUnpark)
        setcarsLeft(newList)

        // Deleting from the cars parked array
        const newPark = carsParked.filter(car => car.num_plate !== num_plate)
        
        setcarsParked(newPark)
    }
    
    const deleteCar = ( num_plate ) => {
        const newList = carsLeft.filter(car => car.num_plate !== num_plate)

        setcarsLeft(newList)
    }
    return (
        <parkingContext.Provider value={{ carsParked, carsLeft, parkCar, unparkCar, deleteCar }}>
            {props.children}
        </parkingContext.Provider>
    )
}

export default ParkingState;