import React, { useState } from 'react';

const Item = ({ content }) => {
    // useStateは、現在のstateと
    // 、それを更新するための関数とを、ペアにして返す
    const [isDone, setIsDone] = useState(false)
    const renderLine = isDone ? 'line-through': 'none'
    
    // const handleChange = () => {
    //     setIsDone(!isDone)
    // }

    return (
        <li>
            <input 
                type="checkbox" 
                onChange={() => {
                    setIsDone(!isDone)
                }} 
            />
            <span style={{textDecoration: renderLine}}>{content}</span>
        </li>
    )
}

export default Item