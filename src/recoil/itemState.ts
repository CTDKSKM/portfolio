import { atom, selector } from 'recoil';

export const itemState = atom({
  key: 'itemState',
  default: 0
});

// const increaseItemState = selector({
//   key: 'increaseItemState',
//   get: ({ get }) => {
//     const state = get(itemState);
//     if (state < 4) return state + 1;
//     return state;
//   }
// });

// const decreaseItemState = selector({
//   key: 'decreaseItemState',
//   get: ({ get }) => {
//     const state = get(itemState);
//     if (state > 0) return state - 1;
//     return state;
//   }
// });
