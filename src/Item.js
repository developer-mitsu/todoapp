import React, { useState } from 'react'

const Item = ({ content, id, deleteTodo }) => {
    const [isDone, setIsDone] = useState(false)

    const handleDelete = () => {
        // todosからtodoを削除する処理
        deleteTodo(id)
    }

    return (
        <li>
            <input 
                type="checkbox" 
                onChange={
                    () => {
                        setIsDone(!isDone)
                    }
                }
            />
            <span style={{
                textDecoration: isDone ? 'line-through' : 'none'
            }}>{content}</span>
            <button onClick={handleDelete}>
                delete
            </button>
        </li>
    )
}

export default Item
