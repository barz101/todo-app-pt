import React, { useRef, useState, useEffect, useCallback, useContext } from 'react';
import dayjs from 'dayjs'
import { ReactComponent as Check } from '../styles/assets/svgs/check.svg';
import viewIcon from '../styles/assets/svgs/view.svg';
import editIcon from '../styles/assets/svgs/edit.svg';
import deleteIcon from '../styles/assets/svgs/delete.svg';
import ContentEditable from 'react-contenteditable';
import todoService from '../services/todoService'

interface Props {
  todo: Todo;
  deleteTodo: DeleteTodo;
}

export const TodoListItem: React.FC<Props> = ({ todo, deleteTodo }) => {

  const [currTodo, setTodo] = useState<any>(todo);
  const [isEditOn, setEditing] = useState(false);
  const [isViewOn, setView] = useState(false);

  const refClientName = useRef(currTodo.clientName);
  const refPhoneNumber = useRef(currTodo.phoneNumber);
  const refEmail = useRef(currTodo.email);

  
  const handleBlur = async (ev: any) => {
    const { id, innerText } = ev.target
     setTodo({ ...currTodo, [id]: innerText })
    todoService.update( {...currTodo, [id]: innerText }).then(() => {
    })
  };

  const handleChange = (ev: any) => {
    switch (ev.currentTarget.id) {
      case 'clientName':
        refClientName.current = ev.target.value;
        break;
      case 'phoneNumber':
        refPhoneNumber.current = ev.target.value;
        break;
      case 'email':
        refEmail.current = ev.target.value;
        break;
    }
  }

  const handleEdit = () => {
    console.log('currTodo', currTodo);
    setEditing(!isEditOn)
  }

  return (
    <tr className={isViewOn ? 'expanded' : 'hide'}>
      <td className="check-box"><input className="check-box"></input></td>
      <td>
        <ContentEditable html={refClientName.current} onBlur={handleBlur} onChange={handleChange}
          disabled={!isEditOn} id={'clientName'}
        />
        <span className={isViewOn ? 'expanded' : 'hidden'}>מידע נוסף: עוד פרטים</span>
      </td>
      <td>
        <ContentEditable html={refPhoneNumber.current} onBlur={handleBlur} onChange={handleChange}
          disabled={!isEditOn} id={'phoneNumber'}
        />
        <span className={isViewOn ? 'expanded' : 'hidden'}>מידע נוסף: עוד פרטים</span>
      </td>
      <td>
        <ContentEditable html={refEmail.current} onBlur={handleBlur} onChange={handleChange}
          disabled={!isEditOn} id={'email'}
        />
        <span className={isViewOn ? 'expanded' : 'hidden'}>מידע נוסף: עוד פרטים</span>
      </td>
      <td>
        <Check className={todo.doneAt ? '' : 'white'}></Check>
        <span>{dayjs(todo.createdAt).format('DD.MM.YYYY')}</span>
        <span className={isViewOn ? 'expanded' : 'hidden'}>מידע נוסף: עוד פרטים</span>
      </td>
      <td className="flex space-between">
        <span className="actions">
          <img onClick={() => setView(!isViewOn)} className="icon" alt="path" src={viewIcon}></img>
          <br></br>
          <span>צפייה</span>
        </span>
        <span className="actions">
          <img onClick={handleEdit} className="icon" alt="path" src={editIcon}></img>
          <br></br>
          <span>עריכה</span>
        </span>
        <span className="actions">
          <img onClick={() => deleteTodo(currTodo.id)} className="icon" alt="path" src={deleteIcon}></img>
          <br></br>
          <span>מחיקה</span>
        </span>
        <span className={isViewOn ? 'expanded' : 'hidden'}></span>
      </td>
    </tr>
  );
};