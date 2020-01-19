import React, { useState } from 'react'

const Form = ({ addTodo }) => {
    const [value, setValue] = useState('')

    const handleSubmit = (e) => {
        // デフォルトの挙動を止める
        e.preventDefault()

        if (!value) {
            alert('入力して下さい。')
            return
        }

        addTodo(value)
        setValue('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                onChange={e => {setValue(e.target.value)}}
                value={value}
            />
            <button type="submit">追加</button>
        </form>
    )
}

export default Form