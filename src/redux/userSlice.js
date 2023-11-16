import { createSlice } from "@reduxjs/toolkit";

const currentEmail = localStorage.getItem('email')
const currentUser = localStorage.getItem('user')
const currentApp = localStorage.getItem('app')
const currentApm = localStorage.getItem('apm')
const currentRol = localStorage.getItem('rol')
const currentInstitucion = localStorage.getItem('institucion')

const initialState= {
    correo: currentEmail ? currentEmail : '',
    nombre: currentUser ? currentUser : '',
    app: currentApp ? currentApp : '',
    apm: currentApm ? currentApm : '',
    rol: currentRol ? currentRol : '',
    idinstitucion: currentInstitucion ? currentInstitucion : '',
}


export const userSlice = createSlice ({
    name: "user",
    initialState,
    reducers: {
        addUser: (state, action) => {
            const {correo, nombre, app, apm, rol, idinstitucion} = action.payload;
            state.correo = correo;
            state.nombre = nombre;
            state.app = app;
            state.apm = apm;
            state.rol = rol;
            state.idinstitucion = idinstitucion;
            localStorage.setItem('email', correo)
            localStorage.setItem('user', nombre)
            localStorage.setItem('app', app)
            localStorage.setItem('apm', apm)
            localStorage.setItem('rol', rol)
            localStorage.setItem('institucion', idinstitucion)
        },
        changeEmail: (state, action) => {
            state.correo = action.payload
        },
        killSession: (state, action) => {
            state.correo = '';
            state.nombre = '';
            state.app = '';
            state.apm = '';
            state.rol = '';
            state.idinstitucion = '';
            localStorage.removeItem('email')
            localStorage.removeItem('user')
            localStorage.removeItem('app')
            localStorage.removeItem('apm')
            localStorage.removeItem('rol')
            localStorage.removeItem('institucion')
        }
    }
})

export const {addUser, changeEmail, killSession} = userSlice.actions;
export default userSlice.reducer;