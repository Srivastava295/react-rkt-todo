export interface ITodoType {
  id: string;
  completed: boolean;
  text: string;
}

export enum VisibilityFilter {
  SHOW_ALL_TODO = 'SHOW_ALL',
  SHOW_COMPLETED = 'SHOW_COMPLETED',
  SHOW_ACTIVE = 'SHOW_ACTIVE',
}
