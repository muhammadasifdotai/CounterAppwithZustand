import { create } from 'zustand';

type State = {
  count: number;
  increase: () => void;
  decrease: () => void;
  reset: () => void;
};

const useStore = create<State>(set => ({
  count: 0,
  increase: () => set(state => ({ count: state.count + 1 })),
  decrease: () => set(state => ({ count: state.count > 0 ? state.count - 1 : 0 })),
  reset: () => set({ count: 0 }),
}));

export default useStore;
