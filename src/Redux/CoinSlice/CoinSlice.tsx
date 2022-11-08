import {createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CoinState {
  value: number
}

const initialState: CoinState = {
  value: 0,
}

export const CoinSlice = createSlice({
  name: 'Coin',
  initialState,
  reducers: {
  
  },
})

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = CoinSlice.actions

export default CoinSlice.reducer