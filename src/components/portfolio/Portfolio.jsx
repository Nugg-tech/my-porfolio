import React, { useState} from 'react'
import "./portfolio.css"
import Menu from './Menu'


const Portfolio = () => {
  const [items] = useState(Menu);

  return (
    <div className="section work container section" id="work">
      <h2 className="section-title">Recent Works</h2>



      <div className="work-container grid">
      {items.map((elem) => {
        const {id, image, title, category} = elem;
        return(
          <a href="https://github.com/Nugg-tech?tab=repositories">
                      <div className="work-card"  key={id}>
            <div className="work-thumbnail">
              <img src={image} alt="" className="work-img" />
              <div className="work-mask"></div>
            </div>
            <span className="work-category">{category}</span>
            <h3 className="work-title">{title}</h3>
          </div>
          </a>
        )
      })}
      </div>
    </div>
  )
}

export default Portfolio