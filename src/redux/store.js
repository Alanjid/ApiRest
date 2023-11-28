import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import pacienteReducer from "./pacienteSlice";

export const store = configureStore({
    reducer: {
        user: userReducer,
        paciente: pacienteReducer
    }
})