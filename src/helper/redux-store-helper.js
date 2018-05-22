import { createStore } from "redux";

const LOCAL_STORAGE_KEY = "notesAppState";

export const createStoreFromLocalStorage = rootReducer => {
  const persistedState = localStorage.getItem(LOCAL_STORAGE_KEY)
    ? JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    : {};

  const store = createStore(rootReducer, persistedState);

  store.subscribe(() => {
    localStorage.setItem("notesAppState", JSON.stringify(store.getState()));
  });

  return store;
};
