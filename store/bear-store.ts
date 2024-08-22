import { create } from "zustand";

interface BearState {
  bears: number;
  incrementPopulation: () => void;
  removeAllBears: () => void;
  updateBears: (newBears: number) => void;
}

export const useBearStore = create<BearState>((set) => ({
  bears: 0,
  incrementPopulation: () =>
    set((state) => ({
      bears: state.bears + 1,
    })),
  removeAllBears: () => set({ bears: 0 }),
  updateBears: (newBears) =>
    set(() => ({
      bears: newBears,
    })),
}));
