import React from 'react'
import './portfolio.css'
import IMG1 from '../../Assets/portfolio1.jpg'
import IMG2 from '../../Assets/portfolio2.jpg'
import IMG3 from '../../Assets/portfolio3.jpg'
import IMG4 from '../../Assets/portfolio4.jpg'
import IMG5 from '../../Assets/portfolio5.png'
import IMG6 from '../../Assets/portfolio6.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'this is project1',
    github: 'https://github.com/akash12singh',
    demo: 'https://www.linkedin.com/in/akash-singh-4a5b941ba/'
  },
  {
  id: 2,
    image: IMG2,
    title: 'this is project1',
    github: 'https://github.com/akash12singh',
    demo: 'https://www.linkedin.com/in/akash-singh-4a5b941ba/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'this is project1',
    github: 'https://github.com/akash12singh',
    demo: 'https://www.linkedin.com/in/akash-singh-4a5b941ba/'
  },
  {
    id: 4,
    image: IMG4,
    title: 'this is project1',
    github: 'https://github.com/akash12singh',
    demo: 'https://www.linkedin.com/in/akash-singh-4a5b941ba/'
  },
  {
    id: 5,
    image: IMG5,
    title: 'this is project1',
    github: 'https://github.com/akash12singh',
    demo: 'https://www.linkedin.com/in/akash-singh-4a5b941ba/'
  },
  {
    id: 6,
    image: IMG6,
    title: 'this is project1',
    github: 'https://github.com/akash12singh',
    demo: 'https://www.linkedin.com/in/akash-singh-4a5b941ba/'
  }
]
function Portfolio() {
  return (
    <section id='portfolio'>
      <h5>Projects</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio_container">
        {
        data.map(({id, image, title, github, demo}) => {
          return (
          <article key={id} className="portfolio_items">
          <div className="portfolio_item-image">
            <img src= {image} alt={title} />
         </div>
         <h3>{title}</h3>  
         <div className="portfolio_item-cta">
            <a href={github} className='btn' target='_blank'> Github</a>
            <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
         </div>                      
        </article>
        )})     
      }
      </div>
    </section>
  )
}

export default Portfolio
