import { renderHook } from '@testing-library/react-hooks';
import { useWindowSize } from '../useWindowResize';

describe('useWindowSize hook', () => {
  it('should return window width and height', () => {
    const {
      result: { current }
    } = renderHook(() => useWindowSize());
    expect(current[0]).toBeDefined();
    expect(current[1]).toBeDefined();
  });

  it('should return updated width on screen resize', () => {
    global.innerWidth = 1000;
    global.dispatchEvent(new Event('resize'));
    const {
      result: { current }
    } = renderHook(() => useWindowSize());
    expect(current[0]).toEqual(1000);
  });

  it('should return updated height on screen resize', () => {
    global.innerHeight = 500;
    global.dispatchEvent(new Event('resize'));
    const {
      result: { current }
    } = renderHook(() => useWindowSize());
    expect(current[1]).toEqual(500);
  });
});
