import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
  return response.data;
});

export const addTask = createAsyncThunk('tasks/addTask', async (task) => {
  const response = await axios.post('https://jsonplaceholder.typicode.com/todos', task);
  return response.data;
});

export const updateTask = createAsyncThunk('tasks/updateTask', async (updatedTask) => {
  const response = await axios.put(`https://jsonplaceholder.typicode.com/todos/${updatedTask.id}`, updatedTask);
  return response.data;
});

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(addTask.fulfilled, (state, action) => {
        state.push(action.payload);
      })
      .addCase(updateTask.fulfilled, (state, action) => {
        const index = state.findIndex((task) => task.id === action.payload.id);
        if (index !== -1) {
          state[index] = action.payload;
        }
      });
  },
});

export default tasksSlice.reducer;
