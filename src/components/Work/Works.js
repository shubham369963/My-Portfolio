import React, {useState, useEffect} from 'react'
import {projectsData, projectNav} from './Data.js'
import WorksItems from "./WorksItems.js"

const Works = () => {

    const [item , setItem] = useState({name: "all"});
    const [projects , setProjects] = useState([]);
    const [active, setSctive] = useState(0);
    

    useEffect(() =>{
        if(item.name === "all"){
            setProjects(projectsData);
        }else{
            const newProjects = projectsData.filter((project) => {
                return project.category === item.name;
            })
            setProjects(newProjects);
        }
    }, [item])


    const handleClick = (e, index) =>{
        setItem({name: e.target.textContent})
        setSctive(index)
    }
  return (
    <div>
        <div className="work__filters">
        {projectNav.map((item, index) =>{
            return (
                <span onClick={(e) => {
                    handleClick(e, index);
                }} className={`${active === index ? "active-work" : ""} work__item`} key={index}>{item.name}</span>
            )
        })}
    </div>

    <div className="work__container container grid">
        {projects.map((item) =>{
            return <WorksItems item={item} key={item.id} />
        })}
    </div>
    </div>
  )
}

export default Works