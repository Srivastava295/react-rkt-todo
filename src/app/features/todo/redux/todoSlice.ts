import { createSlice } from '../../../../utils/@reduxjs/toolkit';
import { todoState, visibilityState } from './todoState';
import { PayloadAction } from '@reduxjs/toolkit';
import { ITodoType, VisibilityFilter } from './todoTypes';

const todoSlice = createSlice({
  name: 'todoState',
  initialState: todoState,
  reducers: {
    addTodo: (state, action: PayloadAction<ITodoType>) => {
      state.push(action.payload);
    },
    toggleTodo: (state, action: PayloadAction<ITodoType>) => {
      let todo = state.find(todo => todo.id === action.payload.id);

      if (todo) {
        todo.completed = !todo.completed;
      }
    },
  },
});

const visibilitySlice = createSlice({
  name: 'visibilityState',
  initialState: visibilityState,
  reducers: {
    setVisibilityFilter: (state, action: PayloadAction<VisibilityFilter>) => {
      return action.payload;
    },
  },
});

export const {
  actions: todoActions,
  reducer: todoReducer,
  name: todoSliceKey,
} = todoSlice;

export const {
  actions: visibilityFilterActions,
  reducer: visibilityFilterReducer,
  name: visibilityFilterSliceKey,
} = visibilitySlice;
