import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    search: '',
    find: '',
    toggleDisplaySearch: false,
    error: {
        isError: false,
        message: '',
    }
};

export const querySlice = createSlice({
    name: "query",
    initialState,
    reducers: {
        setSearch: (state, value) => {
            const newValue = value.payload;

            if(newValue.length < 4) {
                state.error.isError = true;
                state.error.message = "Must be at least 4 characters long";
                state.search = '';
                return
            }

            if(newValue.toLowerCase() === 'doublevpartners') {
                state.error.isError = true;
                state.error.message = 'Cannot be "doublevpartners"';
                state.search = '';
                return
            }

            state.search = value.payload;
        },
        setFind: (state, value) => {
            const newValue = value.payload;

            if(newValue.length < 4) {
                state.error.isError = true;
                state.error.message = "Must be at least 4 characters long";
                state.find = '';
                return
            }

            if(newValue.toLowerCase() === 'doublevpartners') {
                state.error.isError = true;
                state.error.message = 'Cannot be "doublevpartners"';
                state.find = '';
                return
            }

            state.find = value.payload;
        },
        setToggleDisplaySearch: (state) => {
            state.toggleDisplaySearch = !state.toggleDisplaySearch;
        },
        dismissError: (state) => {
            state.error.isError = false;
            state.error.message = '';
        }
    }
})


export const { setSearch, setFind, setToggleDisplaySearch, dismissError } = querySlice.actions;
export default querySlice.reducer;