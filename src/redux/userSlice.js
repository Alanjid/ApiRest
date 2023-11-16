import { createSlice } from "@reduxjs/toolkit";

const initialState= {
    correo: "",
    nombre: "",
    app: "",
    apm: "",
    rol: "",
    idinstitucion: "",
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
        },
        changeEmail: (state, action) => {
            state.correo = action.payload
        }
    }
})

export const {addUser, changeEmail} = userSlice.actions;
export default userSlice.reducer;