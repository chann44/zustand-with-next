import { create } from "zustand";

interface BearState {
  bears: number;
  actions: {
    incrementPopulation: () => void;
    removeAllBears: () => void;
    updateBears: (newBears: number) => void;
  };
}

const bearStore = create<BearState>((set) => ({
  bears: 0,
  actions: {
    incrementPopulation: () =>
      set((state) => ({
        bears: state.bears + 1,
      })),
    removeAllBears: () => set({ bears: 0 }),
    updateBears: (newBears) =>
      set(() => ({
        bears: newBears,
      })),
  },
}));

export const useBearPopulationCount = () => bearStore((state) => state.bears);
export const useBearStoreActions = () => bearStore((state) => state.actions);
