import { createSlice } from "@reduxjs/toolkit";


const currentToken = localStorage.getItem('token')
const currentEmail = localStorage.getItem('email')
const currentUser = localStorage.getItem('user')
const currentApp = localStorage.getItem('app')
const currentApm = localStorage.getItem('apm')
const currentRol = localStorage.getItem('rol')
const currentInstitucion = localStorage.getItem('idinstitucion')

const initialState= {
    token: currentToken ? currentToken : null,
    correo: currentEmail ? currentEmail : null,
    nombre: currentUser ? currentUser : null,
    app: currentApp ? currentApp : null,
    apm: currentApm ? currentApm : null,
    rol: currentRol ? currentRol : null,
    idinstitucion: currentInstitucion ? currentInstitucion : null,
}


export const userSlice = createSlice ({
    name: "user",
    initialState,
    reducers: {
        addUser: (state, action) => {
            const {correo, nombre, app, apm, rol, idinstitucion, token} = action.payload;
            state.token = token;
            state.correo = correo;
            state.nombre = nombre;
            state.app = app;
            state.apm = apm;
            state.rol = rol;
            state.idinstitucion = idinstitucion;
            localStorage.setItem('token', token)
            localStorage.setItem('email', correo)
            localStorage.setItem('user', nombre)
            localStorage.setItem('app', app)
            localStorage.setItem('apm', apm)
            localStorage.setItem('rol', rol)
            localStorage.setItem('idinstitucion', idinstitucion)
        },
        changeEmail: (state, action) => {
            state.correo = action.payload
        },
        killSession: (state, action) => {
            state.token = null;
            state.correo = null;
            state.nombre = null;
            state.app = null;
            state.apm = null;
            state.rol = null;
            state.idinstitucion = null;
            localStorage.removeItem('token')
            localStorage.removeItem('email')
            localStorage.removeItem('user')
            localStorage.removeItem('app')
            localStorage.removeItem('apm')
            localStorage.removeItem('rol')
            localStorage.removeItem('idinstitucion')
        }
    }
})

export const {addUser, changeEmail, killSession} = userSlice.actions;
export default userSlice.reducer;


export const selectCurrentInfo = (state) => state.user
export const selectCurrentToken = (state) => state.user.token
export const selectCurrentRol = (state) => state.user.rol