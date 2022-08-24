import React, { useContext, useState } from 'react'
import { parkingContext } from '../context/parkingState'

const AddCar = () => {

    const { parkCar } = useContext(parkingContext);
    const [formValues, setformValues] = useState({
        num_plate: '',
        driver_name: '',
        time: ''
    })

    const onChange = (e) => {
        setformValues({
            ...formValues,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault()
        let date = new Date().toString().split(" ")
        let time = date[4]
        parkCar(formValues.num_plate.toUpperCase() , formValues.driver_name, time)
        setformValues({
            num_plate: '',
            driver_name: '',
            time: ''
        })
    }
  return (
      <form onSubmit={(e) => onSubmit(e)} style={{ boxShadow: '0 0 5px 2px grey', borderRadius: '50px', padding: '2.5%'}}>
        <header className='text-center my-2'>
            <h2> Park A New Car</h2>
        </header>
          <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Plate Number</label>
              <input onChange={(e)=> onChange(e)} value={formValues.num_plate} type="text" className="form-control" name='num_plate' aria-describedby="emailHelp"/>
                  
          </div>
          <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Driver Name</label>
              <input onChange={(e)=> onChange(e)} value={formValues.driver_name} type="text" className="form-control" name='driver_name' />
          </div>
          <div className="row">
              <button id="liveToastBtn" type="submit" className="btn btn-primary w-50" style={{ margin: '5px auto', alignItems:'center',fontWeight:'700' }}>🚗  Park Car</button>
          </div>
      </form>
  )
}

export default AddCar