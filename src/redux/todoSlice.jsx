import { createSlice } from '@reduxjs/toolkit'


export const todoSlice = createSlice({
    name: 'todos',
    initialState: [
        {id: 1, title: 'todo1', completed: false},
        {id: 2, title: 'todo2', completed: true},
        {id: 3, title: 'todo3', completed: false},
    ],
    reducers: {
        addTodo: (state, action) => {
           const newTodo = {
            id: Date.now(),
            title: action.payload.title,
            completed: false
           }
           state.push(newTodo)
        }
    }
}) 
console.log(todoSlice)
console.log(todoSlice.actions)
console.log(todoSlice.reducer)

export const { addTodo } = todoSlice.actions

export default todoSlice.reducer 