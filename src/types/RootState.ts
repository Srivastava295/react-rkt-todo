// [IMPORT NEW CONTAINER-STATE ABOVE] < Needed for generating containers seamlessly

/* 
  Because the redux-injectors injects your reducers asynchronously somewhere in your code
  You have to declare them here manually
*/

import {
  ITodoType,
  VisibilityFilter,
} from '../app/features/todo/redux/todoTypes';

export interface RootState {
  todoState?: ITodoType[];
  visibilityState?: VisibilityFilter;
  // [INSERT NEW REDUCER KEY ABOVE] < Needed for generating containers seamlessly
}
