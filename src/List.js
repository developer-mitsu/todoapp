import React from 'react'

import Item from './Item'

const List = ({ todos, deleteTodo }) => {
    return (
        <ul>
            {
                todos.map((todo, index) => 
                    <Item
                        id={index}
                        content={todo}
                        deleteTodo={deleteTodo}
                    ></Item>
                )
            }
        </ul>
    )
}

export default List