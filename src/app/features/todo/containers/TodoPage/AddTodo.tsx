import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ITodoType } from '../../redux/todoTypes';
import { todoActions } from '../../redux/todoSlice';

const AddTodo: React.FC = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState('');

  const newTodo: ITodoType = {
    id: Math.random().toString(36).substr(2, 9),
    completed: false,
    text: text,
  };

  function handleTextChange(event: React.ChangeEvent<HTMLInputElement>) {
    setText(event.currentTarget.value);
  }

  function handleTodoSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!text.trim()) {
      return;
    }
    dispatch(todoActions.addTodo(newTodo));
    setText('');
  }

  return (
    <>
      <form onSubmit={handleTodoSubmit}>
        <input type="text" value={text} onChange={handleTextChange} />
        <button type="submit">Add</button>
      </form>
    </>
  );
};

export default AddTodo;
