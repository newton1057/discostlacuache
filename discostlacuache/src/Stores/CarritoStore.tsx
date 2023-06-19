import { create } from "zustand";
import { persist } from 'zustand/middleware';

type Carrito_ = {
    Cantidad: number,
}

type Actions = {
    setCantidad: (Cantidad: number) => void
}

export const useCarritoStore = create(persist<Carrito_ & Actions>((set) => ({
    Cantidad: 0,
    
    setCantidad: (Cantidad: number) => set((state) => ({
        Cantidad: Cantidad
    }))
}), {
    name: 'Carrito'
}


))