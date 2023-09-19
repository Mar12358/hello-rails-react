import { createSlice } from '@reduxjs/toolkit';
import fetchGreeting from '../thunk';

const initialState = {
  greeting: '',
  isLoading: true,
  error: false,
  errMsg: '',
};

const greetingSlice = createSlice({
  name: 'greeting',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchGreeting.pending, (state) => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(fetchGreeting.fulfilled, (state, action) => {
        state.greeting = action.payload;
        state.isLoading = false;
        state.error = false;

      }).addCase(fetchGreeting.rejected, (state, action) => {
        
        state.isLoading = false;
        state.error = true;
        console.log(action.error)
        state.errMsg = action.error.message;
        
      });
  }
})

export default greetingSlice.reducer;
