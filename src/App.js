// コンポーネント名はUpperCamelCase
import React, { useState, useEffect } from 'react'

import styled from 'styled-components'
import GlobalStyle from './GlobalStyle'

import Form from './Form'
import List from './List'

import axios from 'axios'

const App = () => {
    const [todos, setTodos] = useState([])

    // useEffectに関数を指定することで、関数を実行するタイミングを
    // 遅らせる
    useEffect(() => {
        axios.get('http://localhost:3001/todos')
            .then(res => {
                setTodos(res.data)
            })
    }, [])

    const addTodo = (content) => {
        // const newTodos = [
        //     ...todos,
        //     value
        // ]
        // setTodos(newTodos)

        const newTodo = {
            content
            // 以下と同義
            // content: content
        }

        axios.post('http://localhost:3001/todos', newTodo)
            .then(res => {
                setTodos(todos.concat(res.data))
            })
    }

    const deleteTodo = (id) => {
        // const newTodos = todos.filter((todo, index) => index !== id)
        // setTodos(newTodos)

        axios.delete(`http://localhost:3001/todos/${id}`)
            .then(res => {
                if (res.status !== 200) {
                    return;
                }
                setTodos(todos.filter((todo) => todo.id !== id))
            })
    }

    return (
        <>
            <GlobalStyle />
            <Title>Todo APP</Title>
            <Form addTodo={addTodo}></Form>
            <List todos={todos} deleteTodo={deleteTodo}></List>
        </>
    )
}

const Title = styled.h1`
    text-align: center;
    font-family: 'Gelasio', serif;
`

export default App