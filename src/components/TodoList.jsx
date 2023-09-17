import React from 'react'
import TodoItem from './TodoItem'
import { useSelector } from 'react-redux'

export default function TodoList() {

    const todos = useSelector((state) => state.todos)

    // const todos = [
    //     { id:1, title: 'todo1', completed: false},
    //     { id:1, title: 'todo2', completed: false},
    //     { id:1, title: 'todo3', completed: false}
    // ]

    return (
        <ul>
            {
                todos.map((todo) => {
                    return (
                        <TodoItem key={todo.id} {...todo} />
                    )
                })
            }
        </ul>
    )
}