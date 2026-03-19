import { create } from "zustand";

interface SavedMoviesState {
  savedMovies: Movie[];
}
interface SavedMoviesActions {
  addSavedMovie: (movie: Movie) => void;
  removeSavedMovie: (movieId: number) => void;
}

export const useSavedMovies = create<SavedMoviesState & SavedMoviesActions>(
  (set) => ({
    savedMovies: [],
    addSavedMovie: (movie) =>
      set((state) => ({ savedMovies: [...state.savedMovies, movie] })),
    removeSavedMovie: (movieId) =>
      set((state) => ({
        savedMovies: state.savedMovies.filter((m) => m.id !== movieId),
      })),
  }),
);
