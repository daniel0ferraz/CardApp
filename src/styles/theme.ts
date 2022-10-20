import {ms} from 'react-native-size-matters';

export default {
  colors: {
    gray: '#2C2C2C',
    gray2: '#666666',
    light: '#EEF1F4',
    dark: '#121212',
    white: '#FFFFFF',
    yellow: '#FFB800',
    orange: '#FF8441',
    red: '#FF6767',
    blue: '#5D9EFF',
    purple: '#A366FF',
  },
  sizes: {
    12: ms(12),
    14: ms(14),
    15: ms(15),
    16: ms(16),
    18: ms(18),
    20: ms(20),
    22: ms(22),
    24: ms(24),
    36: ms(36),
    100: ms(100),
  },

  spacings: {
    4: ms(4),
    8: ms(8),
    12: ms(12),
    16: ms(16),
    20: ms(20),
    24: ms(24),
    28: ms(28),
    40: ms(40),
  },

  radius: {
    10: ms(10),
    12: ms(12),
    15: ms(15),
    50: ms(50),
  },
} as const;
