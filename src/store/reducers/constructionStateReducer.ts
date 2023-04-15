import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IConstructionStatePayload {
  id: string,
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
      const targetItemIndex = state.findIndex(item => item.id === action.payload.id)
      const copiedState = [...state]
      copiedState.splice(targetItemIndex, 1)
      if (targetItemIndex === -1) return
      return copiedState
    }
  },
})

// Action creators are generated for each case reducer function
export const { updateConstructionState, removeItem } = constructionStateSlice.actions

export default constructionStateSlice.reducer