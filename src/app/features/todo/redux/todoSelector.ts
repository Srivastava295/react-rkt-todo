import { RootState } from '../../../../types';
import { createSelector } from '@reduxjs/toolkit';
import { ITodoType, VisibilityFilter } from './todoTypes';

const selectTodoDomain = (state: RootState) => state.todoState;

const selectVisibilityFilterDomain = (state: RootState) =>
  state.visibilityState;

function getVisibleTodos(
  todoState: ITodoType[] | undefined,
  visibilityState: VisibilityFilter | undefined,
) {
  switch (visibilityState) {
    case VisibilityFilter.SHOW_ALL_TODO:
      return todoState;
    case VisibilityFilter.SHOW_ACTIVE:
      return todoState?.filter(todo => !todo.completed);
    case VisibilityFilter.SHOW_COMPLETED:
      return todoState?.filter(todo => todo.completed);
    default:
      throw new Error('Unknown filter ' + visibilityState);
  }
}

const selectVisibleTodoDomain = (state: RootState) =>
  getVisibleTodos(state.todoState, state.visibilityState);

export const todosSelector = createSelector([selectTodoDomain], todos => todos);

export const visibilitySelector = createSelector(
  [selectVisibilityFilterDomain],
  visibilityFilter => visibilityFilter,
);

export const visibleTodoSelector = createSelector(
  [selectVisibleTodoDomain],
  visibleTodoState => visibleTodoState,
);
