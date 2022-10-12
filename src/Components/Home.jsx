import React from 'react'

function Home() {
  return (
    <div className='container'>
      <div className='container py-5'>
        <div className='row justify-content-center'>
            <div className='col-6'>
            <h3>ABOUT US</h3>
            <h5>1000+ customers using</h5>
            <h5>Our application.</h5>
            <ul>
                <li>Powerful and flexible them</li>
                <li>Simple,transparent pricing</li>
                <li>Build tools and full documents</li>
            </ul>
            <button type="button" class="btn btn-success">Read More</button>
            </div>
            <div className='col-6'>
            One of two columns
            </div>

            </div>
            <div className='text-center'>
            <p className='display-6 pt-5 headcolor2'>Quick & Easy Process</p>
            <p className='text-center'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used <br/>
                to demonstrate the visual form of a document or a <br/>
                typeface without relying on meaningful content. Lorem ipsum may be used <br/>
                as a placeholder before final copy is available.</p>
                </div>
                <button type="button" class="btn btn-success">Read More</button>
            </div>

      
    </div>
  )
}

export default Home
