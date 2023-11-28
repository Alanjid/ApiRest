import { createSlice } from "@reduxjs/toolkit";


const initialState= {
    karnet: localStorage.getItem('karnet') ?? null,
    nombre: ''
}


export const pacienteSlice = createSlice ({
    name: "paciente",
    initialState,
    reducers: {
        addPaciente: (state, action) => {            
            state.karnet = action.payload;
            localStorage.setItem('karnet',action.payload)            
        },   
        setNombre: (state,action)=>{
            state.nombre = action.payload
        }     
    }
})

export const {addPaciente, setNombre} = pacienteSlice.actions;
export default pacienteSlice.reducer;