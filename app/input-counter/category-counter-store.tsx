"use client";
import React, { ReactNode, createContext, useContext } from "react";
import { StoreApi, useStore } from "zustand";
import { createStore } from "zustand";
import { Parameter } from "./_categoryTypes";
type ParameterWithValue = Parameter;

// Define the shape of the state and actions
type BearStoreState = {
  count: number;
  isValidToSave: boolean;
  prevValue: number;
  maxValue: number;
  parameters: ParameterWithValue[];
  actions: {
    reset: () => void;
    setParameter: (index: number, value: number) => void;
  };
};

// Define the props for the BearStoreProvider
interface BearStoreProviderProps {
  children: ReactNode;
  initialBears: number;
  parameters: ParameterWithValue[];
  maxValue: number;
}

// Define the context type
type BearStoreContextType = StoreApi<BearStoreState> | null;

// Create a context for the store
const BearStoreContext = createContext<BearStoreContextType>(null);

const CounterStoreProvider = ({
  children,
  initialBears,
  parameters,
  maxValue,
}: BearStoreProviderProps) => {
  const [store] = React.useState(() =>
    createStore<BearStoreState>((set) => ({
      maxValue,
      isValidToSave: false,
      count: initialBears,
      parameters,
      prevValue: 0,
      actions: {
        setParameter: (index, value) =>
          set((state) => {
            const newParameters = [...state.parameters];
            newParameters[index].value = value;
            const total = newParameters.reduce(
              (sum, param) => sum + param.value,
              0
            );
            return {
              parameters: newParameters,
              count: total,
              isValidToSave: state.maxValue == total,
            };
          }),
        reset: () => set({ count: 0, prevValue: 0 }),
      },
    }))
  );

  return (
    <BearStoreContext.Provider value={store}>
      {children}
    </BearStoreContext.Provider>
  );
};

const useCounterStore = (selector: (state: BearStoreState) => any) => {
  const store = React.useContext(BearStoreContext);
  if (!store) {
    throw new Error("Missing BearStoreProvider");
  }
  return useStore(store, selector);
};
export { CounterStoreProvider, useCounterStore };

export const useCount = () => useCounterStore((state) => state.count);
export const useActions = () => useCounterStore((state) => state.actions);
export const useParameterAction = () =>
  useCounterStore((state) => state.actions.setParameter);
export const useParameters = () => useCounterStore((state) => state.parameters);
export const useValidToSave = () =>
  useCounterStore((state) => state.isValidToSave);
