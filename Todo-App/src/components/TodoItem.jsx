import React from 'react'

const TodoItem = ({id,title,status}) => { 
  return (
    <>
    <div>
        <h2> {id }. <span style={{color:"blue"}}>{ title }</span> <span style={{color:status?"green":"red"}}>- { status?"Completed":"Pending"}</span> <button>Delete Todo</button></h2> 
    </div>
    </>
  )
}

export default TodoItem