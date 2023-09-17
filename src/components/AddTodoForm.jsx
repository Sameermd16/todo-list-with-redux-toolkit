import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../redux/todoSlice'

export default function AddTodoForm() {
    const [inputValue, setInputValue] = useState('')

    const dispatch = useDispatch()

    function handleSubmit(e) {
        e.preventDefault()
        dispatch(
            addTodo({
                title: inputValue 
            })
        )
    }

    return (
        <form onSubmit={handleSubmit} className='form-inline mt-3'>
            <input
                type="text"
                value={inputValue}
                placeholder="Add todo"
                onChange={(event) => setInputValue(event.target.value)}
                className='form-control mb-2 mr-sm-2'
            />
            <button type='submit' className='btn btn-primary btn-sm'>submit</button>
        </form>
    )
}


