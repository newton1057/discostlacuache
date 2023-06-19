import { create } from "zustand";
import { persist } from 'zustand/middleware';

type Data_ = {
    email: string,
    nombres: string,
    apellidos: string,
    telefono: string,
}

type Actions = {
    setEmail: (email: string) => void,
    setNombres: (nombres: string) => void,
    setApellidos: (apellidos: string) => void,
    setTelefono: (telefono: string) => void,
}

export const useDataStore = create(persist<Data_ & Actions>((set) => ({
    email: "",
    nombres: "",
    apellidos: "",
    telefono: "",

    setEmail: (email: string) => set((state) => ({
        email: email
    })),
    setNombres: (nombres: string) => set((state) => ({
        nombres: nombres
    })),
    
    setApellidos: (apellidos: string) => set((state) => ({
        apellidos: apellidos
    })),
    setTelefono: (telefono: string) => set((state) => ({
        telefono: telefono
    }))
}), {
    name: 'Data'
}
))