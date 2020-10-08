import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { visibleTodoSelector } from '../../redux/todoSelector';
import TodoListItem from '../../components/Todo/TodoListItem';
import { todoActions } from '../../redux/todoSlice';

const TodoList: React.FC = () => {
  const dispatch = useDispatch();
  const todos = useSelector(visibleTodoSelector);

  return (
    <ul>
      {todos?.map(todo => (
        <TodoListItem
          key={todo.id}
          {...todo}
          onClickToggle={() => dispatch(todoActions.toggleTodo(todo))}
        />
      ))}
    </ul>
  );
};

export default TodoList;
