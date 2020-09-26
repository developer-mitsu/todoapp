import React, { useState } from 'react'

const Form = ({ addTodo }) => {
    const [value, setValue] = useState('')

    const handleSubmit = e => {
        e.preventDefault() // デフォルトの挙動をキャンセル

        //! フォームの値が空のとき、
        //! 処理を中断してアラートを出す
        if (!value) {
            alert('入力してください。')
            return
        }

        addTodo(value)

        //! 空にする処理
        setValue('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                onChange={e => {
                    setValue(e.target.value)
                }}
                value={value}
            />
        </form>
    )
}

export default Form