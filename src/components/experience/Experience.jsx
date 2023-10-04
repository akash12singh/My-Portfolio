import React from 'react'
import './Experience.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'

function Experience() {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className='container experience_container'>
        <div className="experience_frontend">
          <h3>Frontend Development</h3>
          <div className="experience_content">
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details-icon '/>
              <div>
              <h4>HTML</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
            <BsFillPatchCheckFill className='experience_details-icon '/>
              <div>
              <h4>CSS</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
            <BsFillPatchCheckFill className='experience_details-icon '/>
              <div>
              <h4>JAVASCRIPT</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
            <BsFillPatchCheckFill className='experience_details-icon '/>
              <div>
              <h4>REACT</h4>
              <small className='text-light'>INTERMEDIATE</small>
              </div>
            </article>
          </div>
          </div>
          {/* Backend  */}

          <div className="experience_backend">
            <h3>Backened Development</h3>
            <div className="experience_content">
              <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details-icon '/>
                <div>
                <h4>SQl</h4>
                <small className='text-light'>INTERMEDIATE</small>
                </div>
              </article>
              <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details-icon '/>
                <div>
                <h4>MONGODB</h4>
                <small className='text-light'>INTERMEDIATE</small>
                </div>
              </article>
              <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details-icon '/>
                <div>
                <h4>NODE JS</h4>
                <small className='text-light'>Familiar</small>
                </div>
              </article>          
            </div>
          </div>
      </div>
    </section>
  )
}

export default Experience
