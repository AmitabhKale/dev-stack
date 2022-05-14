import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import ticketService from './ticketService'

// Define Initial State
const initialState = {
    tickets: [],
    ticket: {},
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

// Export ticketSlice by defining createSlice method in it
export const ticketSlice = createSlice({
    name: 'ticket',
    initialState,
    reducers: {
        reset: (state) => initialState
    },
    extraReducers: (builder) => {}
})

export const {reset} = ticketSlice.actions
export default ticketSlice.reducer