import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { stateNames } from '../../utils/entities/stateNames'

export const currentWaySlice = createSlice({
  name: 'currentWay',
  initialState: stateNames.constructorWay,
  reducers: {
    setCurrentWay(state, action: PayloadAction<string>) {
      if (action.payload) return action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { setCurrentWay } = currentWaySlice.actions

export default currentWaySlice.reducer