import React, { useState } from 'react';

const Item = ({ 
    content, 
    deleteTodo, 
    id 
}) => {
    // useStateは、現在のstateと
    // 、それを更新するための関数とを、ペアにして返す
    const [isDone, setIsDone] = useState(false)
    const renderLine = isDone ? 'line-through': 'none'

    const handleDelete = () => {
        deleteTodo(id)
    }

    return (
        <li>
            <input 
                type="checkbox" 
                onChange={() => {
                    setIsDone(!isDone)
                }} 
            />
            <span style={{textDecoration: renderLine}}>{content}</span>
            <button onClick={handleDelete}>削除</button>
        </li>
    )
}

export default Item