"use client"

import { useEffect,useState } from 'react'
import React from 'react'

const Todo = () => {
    const [todo, setTodo] = useState({});

    useEffect(async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1') ;
 const result =  await response.json();
 setTodo(result)
    }, []);
  return (
    <div>
    <h2>{todo.title}</h2>
    </div>
  )
}

export default Todo