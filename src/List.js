import React from 'react'

import Item from './Item'

const List = ({ todos, deleteTodo }) => {
    return (
        <ul>
            {
                todos.map((todo) => 
                    <Item
                        id={todo.id}
                        content={todo.content}
                        deleteTodo={deleteTodo}
                    ></Item>
                )
            }
        </ul>
    )
}

export default List