import React from 'react';

interface ITodoProps {
  completed: boolean;
  text: string;
  onClickToggle(): void;
}

const TodoListItem: React.FC<ITodoProps> = props => {
  return (
    <li
      style={{ textDecoration: props.completed ? 'line-through' : 'none' }}
      onClick={props.onClickToggle}
    >
      {props.text}
    </li>
  );
};

export default TodoListItem;
