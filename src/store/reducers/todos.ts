import { createSlice, PayloadAction, Draft } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const todos: TodoItem[] = Array(5)
  .fill(0)
  .map((item, i) => ({
    id: nanoid(8),
    name: '事项' + i,
    status: 1,
  }));

interface TodoItem {
  id: string;
  name: string;
  status: 0 | 1;
}

interface TodosState {
  todos: TodoItem[];
}

const initialState: TodosState = {
  todos: todos,
};
const reducers = {
  addTodos: (state: Draft<TodosState>, action: PayloadAction<string>) => {
    state.todos.push({ id: nanoid(8), name: action.payload, status: 1 });
  },
  removeTodos: (state: Draft<TodosState>, action: PayloadAction<string>) => {
    state.todos = state.todos.map((item) => ({ ...item, status: action.payload === item.id ? 0 : item.status }));
  },
};
export const todosSlice = createSlice<TodosState, typeof reducers>({
  name: 'todos',
  initialState,
  reducers,
});
export const { addTodos, removeTodos } = todosSlice.actions;
export default todosSlice.reducer;
