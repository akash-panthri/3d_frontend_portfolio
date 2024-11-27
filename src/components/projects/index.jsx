import React from 'react'

function ProjectList({projects}) {
  return (
    <div>
    {projects.map((project, index) => {
        return <div className="" key={index}>{project.name}</div>;
      })}
    </div>
  )
}

export default ProjectList