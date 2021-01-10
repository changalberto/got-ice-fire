import { createSlice } from '@reduxjs/toolkit'

export const layoutsSlice = createSlice({
  name: 'layouts',
  initialState: {
    breakpoint: null,
  },
  reducers: {
    breakpointChange: (state, action) => {
      state.breakpoint = action.payload
    },
  },
})

export default layoutsSlice.reducer
