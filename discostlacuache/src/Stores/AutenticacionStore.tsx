import { create } from "zustand";
import { persist } from 'zustand/middleware';

type Autenticacion_ = {
    email: string,
    logged: boolean,
}

type Actions = {
    setEmail: (email: string) => void
    setLogged: (logged: boolean) => void
}

export const useAutenticacionStore = create(persist<Autenticacion_ & Actions>((set) => ({
    email: "",
    logged: false,

    setEmail: (email: string) => set((state) => ({
        email: email
    })),
    setLogged: (logged: boolean) => set((state) => ({
        logged: logged
    }))
}), {
    name: 'Autenticacion'
}


))