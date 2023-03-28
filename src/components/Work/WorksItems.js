import React from 'react'

const WorksItems = ({item}) => {
  return (
    <div className="work__card" key={item.id}>
        <img src={item.image} alt={item.title} className="work__img" />
        <h3 className="work__title">{item.title}</h3>
        <a href={item.glink} target="blank" className="work__button" >GitHub <i className="bx bx-right-arrow-alt work__button-icon"></i> </a>
        <a href={item.link} target="blank" className="work__button" >Link <i className="bx bx-right-arrow-alt work__button-icon"></i> </a>
    </div>
  )
}

export default WorksItems