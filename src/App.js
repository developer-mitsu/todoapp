// コンポーネント名はUpperCamelCase
import React, { useState } from 'react'

import styled from 'styled-components'

import Form from './Form'
import List from './List'

const App = () => {
    const [todos, setTodos] = useState([
        '課題をする',
        '洗濯をする',
        '仕事をする',
        'あああああ',
        '追加データ'
    ])

    const addTodo = (value) => {
        const newTodos = [
            ...todos,
            value
        ]
        setTodos(newTodos)
    }

    const deleteTodo = (id) => {
        const newTodos = todos.filter((todo, index) => index !== id)
        setTodos(newTodos)
    }

    return (
        <>
            <Title>Todo APP</Title>
            <Form addTodo={addTodo}></Form>
            <List todos={todos} deleteTodo={deleteTodo}></List>
        </>
    )
}

const Title = styled.h1`
    text-align: center;
`

export default App