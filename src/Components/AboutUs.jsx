import React from 'react'

function AboutUs() {
  return (
    <>
    <div className='container about d-flex'>
        <div className='col-md-6'>
        <h1 className='display-6 text-start fw-bold'>About<br/>
        Us</h1>
        <p className='text-start'> But I must explain to you how all this mistaken idea of reprobating pleasure and extolling pain arose. 
            To do so, I will give you a complete account of the system, and expound the actual teachings of the great 
            explorer of the truth, the master-builder of human happiness. No one rejects, dislikes or avoids pleasure itself,
             because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences 
             that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, 
             because it is pain, but occasionally circumstances occur in which toil and pain can procure him some great pleasure. 
             <br/>
             <br/>
             <br/>
             The discovery of the text's origin is attributed to Richard McClintock, a Latin scholar at Hampden–Sydney College. 
             McClintock connected Lorem ipsum to Cicero's writing sometime before 1982 while searching for instances of the Latin 
             word consectetur, which was rarely used in classical literature.McClintock first published his discovery in a
              1994 letter to the editor of Before & After magazine, contesting the editor's earlier claim that Lorem ipsum held no meaning.
    </p>
        </div>
    <div className='col-md-4 pt-2 mx-5'>
        <div>
        <img src="team-3.jpeg" class="circleperson" alt="..."/>
        <p className='headcolor2 text-center py-3 display-6'>I help companies ipsum scholar elit, <br/>
        sed eiusmod tempor incididunt ut labore</p>
        <button class="btn btn-success" type="submit">Find me on Linkedin</button>
        </div>
    </div>
    </div>
    </>
  )
}

export default AboutUs
