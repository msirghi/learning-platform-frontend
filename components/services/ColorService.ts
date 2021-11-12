const letters = 'abcdefghijklmnopqrstuvwxyz';
const ORANGE = '#f55723';
const PURPLE = '#673ab7';
const GREEN = '#32a299';

// TODO: Add more color variations
const getAvatarColorByText = (text: string | undefined) => {
  if (!text) {
    return;
  }
  const firstLetter = text.charAt(0).toLowerCase();
  const position = letters.indexOf(firstLetter);

  if (position >= 0 && position < 10) {
    return ORANGE;
  }

  if (position >= 10 && position < 15) {
    return PURPLE;
  }

  return GREEN;
};

export default {
  getAvatarColorByText
};
