import { useState } from "react"

export function NewTodoForm({ setTodosFunction }) {
    const [newItem, setNewItem] = useState("")
    
    function handleSubmit(e){
        e.preventDefault()
        if(newItem === "") return
        setTodosFunction(newItem)
        setNewItem("")
        }
        
    return (
        <div className="container">
        <form onSubmit={handleSubmit} className="new-item-form">
            <div className="form-row">
                <label className="new-task" htmlFor="item">Nueva Tarea</label>
                <input 
                    value={newItem}
                    onChange={e => setNewItem(e.target.value)}
                    type="text"
                    id="item"
                />
            </div>
            <button className="btn">Agregar</button>
        </form>
        </div>

        )
}