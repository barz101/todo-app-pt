import React, { useState } from 'react';
const shortid = require('shortid');

interface Props {
  addTodo: AddTodo;
  closeModal: CloseModal;
}

export const AddTodoForm: React.FC<Props> = ({ addTodo, closeModal }) => {
  const initialFormState: any = { email: '', phoneNumber: '', clientName: '' }
  const [todo, setTodo] = useState(initialFormState)
  
  const handleInputChange = (ev: any) => {
    const { name, value }: any = ev.target
    setTodo({ ...todo, [name]: value })
  }

  const handleFormSubmit = (ev: any) => {
    ev.preventDefault()
    const newTodo = todo;
    newTodo.createdAt = Date.now();
    newTodo.id = shortid.generate();
    console.log('newtodo', newTodo);
    addTodo(todo)
    setTodo(initialFormState)
    handleClose(ev);
  }
  const handleClose = (ev:any) => {
    ev.preventDefault()
    closeModal()
  }
  return (
    <form className="new-todo flex column align-center">
      <button onClick={handleClose} className="close">X</button>
      <label htmlFor="clientName">שם הלקוח</label>
      <input id="clientName" type="text" name="clientName" value={todo.clientName} onChange={handleInputChange} />
      <label htmlFor="email">מייל</label>
      <input type="text" id="email" name="email" value={todo.email} onChange={handleInputChange} />
      <label htmlFor="phoneNumber">מספר טלפון</label>
      <input type="text" id="phoneNumber" name="phoneNumber" value={todo.phoneNumber} onChange={handleInputChange} />
      <label htmlFor="address">כתובת</label>
      <input type="text" id="address" name="address" placeholder={''} />
      <button onClick={handleFormSubmit}>הוסף משימה חדשה</button>
    </form>
  )
};