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
        'あああああ'
    ])

    return (
        <>
            <Title>Todo APP</Title>
            <Form></Form>
            <List todos={todos}></List>
        </>
    )
}

const Title = styled.h1`
    text-align: center;
`

export default App