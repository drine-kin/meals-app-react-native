import { createSlice} from "@reduxjs/toolkit"

const favouritesSlice = createSlice({
    name: 'favourites',
    initialState: {
        ids: []
    },
    reducers: {
        addToFavourite: (state, action) => {
            state.ids.push(action.payload.id)
        },
        removeFromFavourite: (state, action) => {
            state.ids.splice(state.ids.indexOf(action.payload.id), 1)
        }
    }
})

export const { addToFavourite, removeFromFavourite } = favouritesSlice.actions
export default favouritesSlice.reducer