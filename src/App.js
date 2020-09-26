import React, { useState } from 'react'
import Form from './Form'
import List from './List'

import shortid from 'shortid'

const App = () => {
    const [todos, setTodos] = useState([])

    const addTodo = value => {
        const newTodos = [
            ...todos,
            {
                content: value,
                id: shortid.generate()
            }
        ]

        setTodos(newTodos)
    }

    const deleteTodo = id => {
        //*  まず、どのidの要素を削除するかを把握する必要がある
        alert(`id: ${id}の要素が削除されます。`)

        //TODO: 渡されたidの要素を削除する処理を書く
    }

    return (
        <>
            <h1>TodoApp</h1>
            <Form addTodo={addTodo}></Form>
            <List deleteTodo={deleteTodo} todos={todos}></List>
        </>
    )
}

export default App