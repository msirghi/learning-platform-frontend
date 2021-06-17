import ColorService from '../ColorService';

describe('Color Service', () => {
  it("should return orange color if text starts with an 'a'", () => {
    const result = ColorService.getAvatarColorByText('avatar');
    expect(result).toEqual('#f55723');
  });

  it("should return purple color if text starts with an 'm'", () => {
    const result = ColorService.getAvatarColorByText('mathematics');
    expect(result).toEqual('#673ab7');
  });

  it("should return green color if text starts with an 'w'", () => {
    const result = ColorService.getAvatarColorByText('wallet');
    expect(result).toEqual('#32a299');
  });

  it('should return nothing if no text is provided', () => {
    const result = ColorService.getAvatarColorByText(undefined);
    expect(result).toEqual(undefined);
  });
});
