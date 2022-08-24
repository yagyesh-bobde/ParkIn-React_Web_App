import React, { useContext, useRef } from 'react'
import { parkingContext } from '../../context/parkingState'

const CarItem = ( {car} ) => {
    const { unparkCar, deleteCar } = useContext(parkingContext)
    const ref = useRef();
    const newref = useRef();
    const onUnPark = () => {
        ref.current.click()
        unparkCar(car.num_plate)
    }

    const onDelete = () => {
        newref.current.click()
        deleteCar(car.num_plate)
    }

  return (
      <div className="card hover mb-4" style={{ minWidth: 'min-content', padding:'1%'}}>
          <div className="row g-0 ">
             { (car.parked) && <div className="col-md-4 mt-2 d-flex" style={{ justifyContent:'center'}}>
                  <img style={{ maxHeight: '150px', width: '75%'}}  src="https://3.imimg.com/data3/NH/IG/GLADMIN-95441/parking-sign-500x500.jpg" className="img-fluid rounded-start" alt="..."/>
              </div>}
              <div className="col-md-8">
                  <div className="card-body">
                      <h5 className="card-title text-center">{car.num_plate}</h5>
                      <div className="d-flex my-2" style={{ alignItems: 'center'}}>
                              <img width={75} height={75} style={{ borderRadius: '75px'}} src='https://w7.pngwing.com/pngs/111/784/png-transparent-bus-driver-car-computer-icons-driving-taxi-logos-logo-monochrome-school-bus.png' alt='usr_logo' />
                            <h3 className='mx-3'>{car.driver_name}</h3>
                      </div>
                      <p className="card-text"><small className="text-muted">Parked at {car.time}</small></p>
                  </div>

            {/* FOOTER for Unpark/Delte */}
                  {(car.parked) && <div className="d-flex" style={{ justifyContent: 'space-between'}}>
                      <button type='button' data-bs-toggle="modal" data-bs-target="#exampleModal" className="btn text-danger" style={{ fontWeight: '300'}}>
                        <li>Un-Park Car</li>
                    </button>  
                    
                    {/* UNPARK MODAL */}
                      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                          <div class="modal-dialog modal-dialog-centered">
                              <div class="modal-content">
                                  <div class="modal-header">
                                      <h5 class="modal-title" id="exampleModalLabel">Confirm</h5>
                                      <button ref={ref} type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                  </div>
                                  <div class="modal-body">
                                      <p>Are you sure you want to un-park your car?</p>
                                  </div>
                                  <div class="modal-footer">
                                      <button  type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                      <button onClick={onUnPark} type="button" class="btn btn-danger" style={{ fontWeight: '750'}}>Unpark  Car</button>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div> }
                  {!(car.parked) && <div className="d-flex" style={{ justifyContent: 'space-between' }}>
                      <button type='button' data-bs-toggle="modal" data-bs-target="#deleteModal" className="btn text-danger" style={{ fontWeight: '800' }}>
                          Delete Car ❌
                      </button>
                     
                     
                     
                      {/*Delete MODAL */}
                      <div class="modal fade" id="deleteModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                          <div class="modal-dialog modal-dialog-centered">
                              <div class="modal-content">
                                  <div class="modal-header">
                                      <h5 class="modal-title" id="exampleModalLabel">Confirm</h5>
                                      <button ref={newref} type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                  </div>
                                  <div class="modal-body">
                                      <p>Are you sure you want to delete this entry?</p>
                                  </div>
                                  <div class="modal-footer">
                                      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                      <button onClick={onDelete} type="button" class="btn btn-danger" style={{ fontWeight: '750' }}>Delete Car ❌</button>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>}
              </div>
              {!(car.parked) && <div className="col-md-4 d-flex mt-2" style={{ justifyContent:'center' }}>
                  <img style={{ maxHeight: '150px', width: '75%' }} src="https://i.pinimg.com/474x/06/6f/e7/066fe72be3ef40559b16aef950a3f6aa.jpg" alt="..." />
              </div>}
          </div>
      </div>
  )
}

export default CarItem