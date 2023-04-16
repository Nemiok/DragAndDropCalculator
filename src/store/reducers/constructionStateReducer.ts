import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { stateNames } from '../../utils/entities/stateNames'

export interface IConstructionStatePayload {
  id: string,
  currentWay: string
}

const initialState: IConstructionStatePayload[] = []

export const constructionStateSlice = createSlice({
  name: 'constructionState',
  initialState,
  reducers: {
    updateConstructionState(state, action: PayloadAction<IConstructionStatePayload>) {
      const hasAlreadyBeenAdded = state.find(item => item.id === action.payload.id)
      if (hasAlreadyBeenAdded) return
      return [...state, action.payload]
    },

    removeItem(state, action: PayloadAction<IConstructionStatePayload>) {
      if (action.payload.currentWay === stateNames.constructorWay) {
        const filteredItems = state.filter(desk => desk.id !== action.payload.id)
        return filteredItems
      }
      return state
    }
  },
})

// Action creators are generated for each case reducer function
export const { updateConstructionState, removeItem } = constructionStateSlice.actions

export default constructionStateSlice.reducer