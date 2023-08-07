import React from 'react'

const ShowArticles = (props) => {

    console.log(props)
  return (
    <div>
    
    ShowArticles
    
    <h1>{props.params.title}</h1>
    </div>
  )
}

export default ShowArticles