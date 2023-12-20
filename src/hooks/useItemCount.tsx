import { useRecoilState } from 'recoil';
import { itemState } from '../recoil/itemState';
import debounce from 'lodash/debounce';
import { MAIN_ITEMS } from '../static/mainItems';

const useItemCount = () => {
  const [itemCount, setItemCount] = useRecoilState(itemState);

  const increaseItemCount = debounce(() => {
    if (itemCount < MAIN_ITEMS.length - 1) setItemCount((prev) => prev + 1);
  }, 150);
  const decreaseItemCount = debounce(() => {
    if (itemCount > 0) setItemCount((prev) => prev - 1);
  }, 150);

  return [increaseItemCount, decreaseItemCount];
};

export default useItemCount;
