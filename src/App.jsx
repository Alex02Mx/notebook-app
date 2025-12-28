import { useEffect, useState } from "react"
import "./style.css"
import { NewTodoForm } from "./NewTodoForm"
import { TodoList } from "./TodoList"


export default function App (){
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS")
    if (localValue == null) return []   

    return JSON.parse(localValue)
  })

  useEffect(()=>{
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  }, [todos])

  function addTodo(title){
    setTodos((curretTodos) => {
      return[
        ...curretTodos,
        {
          id: crypto.randomUUID(),
          title,
          completed: false
        }
      ]
    })
  }
  
  function toggleTodo(id, completed){
      setTodos(currentTodos => {
        return currentTodos.map( todo => {
            if(todo.id === id) {
              return{...todo, completed}
            }
            return todo
        })
      })
  }

  function deleteTodo(id){
    setTodos( currentTodos => {
      return currentTodos.filter(selected => selected.id !== id)
    })
  }
 

  return (
    <>
    <NewTodoForm setTodosFunction = {addTodo}/>
    <h1 className="header">Lista de tareas</h1>
    <TodoList todos = {todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
    
    </>
  )
 }