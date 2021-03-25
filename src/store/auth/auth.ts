import { createSlice } from '@reduxjs/toolkit';

import { IAuth } from './types';

const slice = createSlice({
  name: 'auth',
  initialState: {
    isLoggedIn: false,
  } as IAuth,
  reducers: {

  }
});

export default slice.reducer;

