import React , { createContext, useState, useEffect } from "react";
import {v4 as uuid} from 'uuid'


export const TaskListContext = createContext();

const initialState = JSON.parse(localStorage.getItem('tasks') || [])

const TaskListContextProvider = (props)=>{

  const [tasks,setTasks] = useState(initialState)
    // Edit Item State
  const [editItem,setEditItem] = useState(null)

    useEffect(() =>{
        localStorage.setItem('tasks', JSON.stringify(tasks))
    },[tasks])
    // Functions

    // Add Task Function

    const addTask = (title) => {
        setTasks([...tasks, {title,id:uuid()}])
    }

    // Remove Function
    const removeTask = (id) => {
        setTasks(tasks.filter( task => task.id !== id))
    }

    // Clear List Function

    const clearList = () => {
        setTasks([])
    }

    // Find Item Function

    const findItem = id => {
        const item = tasks.find(task => task.id === id)

        setEditItem(item)
    }

    // Edit Task Function

    const editTask = (title,id) =>{
        const newTasks = tasks.map(task => (
          task.id === id ? {title,id} : task  
        ))

        setTasks(newTasks)
        setEditItem()
    }




    // Return Part

    return (
        <TaskListContext.Provider value = {{tasks, addTask , removeTask, clearList, findItem, editTask, editItem}}>
            {props.children}
        </TaskListContext.Provider>
    )
}

 export default TaskListContextProvider