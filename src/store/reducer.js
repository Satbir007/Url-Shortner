import {createSlice } from '@reduxjs/toolkit';

const initialState = [];

const addUrlReducer = createSlice({
  name: 'urlx',
  initialState,
  reducers: { 
   addUrl: (state, action) => {
      state.push(action.payload)
      return state;
    }
  }
});

export const {addUrl} = addUrlReducer.actions ;
export const reducer = addUrlReducer.reducer;