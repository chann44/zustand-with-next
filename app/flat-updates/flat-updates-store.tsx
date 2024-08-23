import { logger } from "-/lib/store-logger";
import { create } from "zustand";

type State = {
  firstName: string;
  lastName: string;
};

type Action = {
  updateFistName: (firstName: State["firstName"]) => void;
  updateLastName: (lastName: State["lastName"]) => void;
};

type PersonStore = {
  state: State;
  actions: Action;
};

export const personStore = create<PersonStore>(
  logger(
    (set) => ({
      state: {
        firstName: "",
        lastName: "",
      },
      actions: {
        updateFistName(firstName) {
          set((state) => ({
            state: {
              ...state.state,
              firstName,
            },
          }));
        },
        updateLastName(lastName) {
          set((state) => {
            return {
              state: {
                ...state.state,
                lastName,
              },
            };
          });
        },
      },
    }),
    "store-logger"
  )
);

export const usePersonState = () => personStore((state) => state.state);
export const usePersonActions = () => personStore((state) => state.actions);
