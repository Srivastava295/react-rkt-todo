import React from 'react';
import { useInjectReducer } from '../../../../../utils/redux-injectors';
import {
  todoSliceKey,
  todoReducer,
  visibilityFilterSliceKey,
  visibilityFilterReducer,
} from '../../redux/todoSlice';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import VisibilityFilterPage from '../VisibilityFilterPage/VisibilityFilterPage';

const TodoPage: React.FC = () => {
  useInjectReducer({ key: todoSliceKey, reducer: todoReducer });
  useInjectReducer({
    key: visibilityFilterSliceKey,
    reducer: visibilityFilterReducer,
  });

  return (
    <div>
      <h1>TodoApp</h1>
      <AddTodo />
      <TodoList />
      <VisibilityFilterPage />
    </div>
  );
};

export default TodoPage;
