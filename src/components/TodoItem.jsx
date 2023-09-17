import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleComplete, deleteTodo } from '../redux/todoSlice'

export default function TodoItem({id, title, completed}) {

    const dispatch = useDispatch()

    const handleCompleteClick = () => {
        dispatch(
            toggleComplete({ id: id, completed: !completed })
        )
    }

    const handleDeleteClick = () => {
        dispatch(
            deleteTodo({ id })
        )
    }
 
    return (
        <li className={`list-group-item ${completed && 'list-group-item-success'}`}> 
            <div className='d-flex justify-content-between'>
                <span className='d-flex align-items-center'>
                    <input type="checkbox" onChange={handleCompleteClick} checked={completed} />
                </span>
                {title}
                <button className='btn btn-sm btn-danger' onClick={handleDeleteClick}>delete</button>
            </div>
        </li>
    )
}