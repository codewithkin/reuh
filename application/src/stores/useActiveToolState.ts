import { create } from "zustand";

export const useActiveToolTabStore = create((set) => ({
  activeToolTab: "resumes",
  updateActiveToolTab: (tab: string) => set({ activeToolTab: tab }),
}));
