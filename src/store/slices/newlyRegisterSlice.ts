import { createSlice } from "@reduxjs/toolkit";

export const newlyRegisterSlice = createSlice ({
    name: 'newlyRegister',
    initialState: {
        isNewlyRegister : false
    },
    reducers: {
        isJustRegister: (state) => {
            state.isNewlyRegister = true;
        },
        isAlreadyRegister: (state) => {
            state.isNewlyRegister = false;
        }
    }

    

})