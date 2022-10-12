import React from 'react'

function Features() {
  return (
    <>
        <div className='container feature mt-5'>
        <h4 className='text-center pt-5'>FEATURES</h4>
        <h5 className='display-6 headcolor2 fw-bolder pt-4'>Our Features & Services.</h5>

        <div className="row row-cols-md-3 mx-2">
  <div className="col">
    <div className="card h-100">
      <img src="communication.jpg" className="card-img-top" alt="..." height="280px"/>
      <div className="card-body">
        <h5 className="card-title">Communication</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. 
        This content is a little bit longer below as a natural additional content.</p>
      </div>
      <div className='pb-4'>
      <button type="button" className="btn btn-success">More</button>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src="about.png" className="card-img-top" alt="..." height="280px"/>
      <div className="card-body">
        <h5 className="card-title">Inspired Design</h5>
        <p className="card-text">This card has supporting text below as a natural lead-in to additional content.
        This is a wider card with supporting text below as a natural lead-in to additional content.</p>
      </div>
      <div className='pb-4'>
      <button type="button" className="btn btn-success">More</button>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src="customer.jpg" className="card-img-top" alt="..." height="280px"/>
      <div className="card-body">
        <h5 className="card-title">Happy Customer</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      </div>
      <div className='pb-4'>
      <button type="button" className="btn btn-success">More</button>
      </div>
    </div>
  </div>
</div>
</div>



<div className="row py-5 mx-5">
  <div className="col-sm-6">
    <div className="card">
      <div className="card-body card1">
        <h5 className="card-title headcolor1 text-start">App Design</h5>
        <p className="card-text text-start display-6 fw-bold">Check our latest blog post<br/>
        for more updates.</p>
        <p className='text-start headcolor1 ' href="#">Learn more</p>
      </div>
    </div>
  </div>
  <div className="col-sm-6">
    <div className="card">
      <div className="card-body card2">
      <h5 className="card-title headcolor2 text-start">App Design</h5>
        <p className="card-text text-start display-6 fw-bold">Check our latest blog post<br/>
        for more updates.</p>
        <p className='text-start headcolor2 ' href="#">Learn more</p>
      </div>
    </div>
  </div>
</div>



</>
  )
}

export default Features


