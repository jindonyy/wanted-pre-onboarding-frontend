const color = {
  black: '#14142B',
  grey: {
    50: '#F9F9F9',
    100: '#F1F1F1',
    200: '#EEEEEE',
    300: '#CCCCCC',
    400: '#AAAAAA',
    500: '#979797'
  },
  red: {
    100: '#FF0000'
  },
  green: {
    100: '#18A286'
  },
  blue: {
    100: '#8ABFFA',
    200: '#007AFF',
    300: '#004DE3'
  },
  white: '#FFFFFF'
};

const palette = {
  primary: {
    initial: color.blue[200],
    disabled: color.blue[100],
    hover: color.blue[300]
  },
  error: color.red[100],
  success: color.green[100],
  placeholder: color.grey[300]
};

export { color, palette };
