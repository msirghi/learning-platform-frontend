import { useState } from 'react';
import useLayoutEffect from './useIsomorphicLayoutEffect';

export const useWindowSize = () => {
  const [size, setSize] = useState([0, 0]);

  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();

    return () => {
      window.removeEventListener('resize', updateSize);
    };
  }, []);

  return size;
};
