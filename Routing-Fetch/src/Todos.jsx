import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
const Todos = () => {
    let [todo,setTodo] = useState(null)
    let {userId} = useParams()
    console.log(userId)
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/todos/"+userId).then(({data})=>{console.log(data);setTodo(data)}).catch((e)=>console.log(e))

    },[])
    console.log(todo)
  return (
    <div>
        {todo!=null && <>
                            <h1>title :{todo.title}</h1>
                            <h1>completed:{todo.completed==true?"true":"false"}</h1>
                    </>}
    </div>
  )
}
export default Todos