import React, { useContext } from 'react'
import {TaskListContext} from '../context/TaskListContext'


export default function Task({task}) {

 const {removeTask, findItem} = useContext(TaskListContext)


    return (
       <li className = 'list-item'>
            <span> {task.title} </span>
            <button className = 'btn-delete task-btn' onClick = {() => removeTask(task.id)}> 
              <i className = 'fas trash-alt'> X </i>
            </button>
            <button className = 'btn-edit task-btn' onClick = {() => console.log(findItem(task.id))}> 
                <i className = 'fas fa-pen'>edit</i>
            </button>
            
       </li>
    )
}
