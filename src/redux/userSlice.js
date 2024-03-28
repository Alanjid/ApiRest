import { createSlice } from "@reduxjs/toolkit";


const currentToken = localStorage.getItem('token')
const currentRol = localStorage.getItem('rol')

const initialState= {
    token: currentToken ? currentToken : null,
    rol: currentRol ? currentRol : null,
}


export const userSlice = createSlice ({
    name: "user",
    initialState,
    reducers: {
        addUser: (state, action) => {
            const {token, rol} = action.payload;
            state.token = token;
            state.rol = rol;
            localStorage.setItem('token', token)
            localStorage.setItem('rol', rol)
        },
        changeEmail: (state, action) => {
            state.correo = action.payload
        },
        killSession: (state, action) => {
            state.token = null;
            state.rol = null;
            localStorage.removeItem('token')
            localStorage.removeItem('rol')
        }
    }
})

export const {addUser, changeEmail, killSession} = userSlice.actions;
export default userSlice.reducer;


export const selectCurrentInfo = (state) => state.user
export const selectCurrentToken = (state) => state.user.token
export const selectCurrentRol = (state) => state.user.rol