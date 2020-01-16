import React from 'react'

import Item from './Item'

const List = ({ todos }) => {
    return (
        <ul>
            {
                todos.map(todo => <Item content={todo}></Item>)
            }
        </ul>
    )
}

export default List