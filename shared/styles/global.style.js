import { style, merge } from 'glamor';
import * as colors from './colors.style';
import fonts from './fonts.style';

export const globals = style({
  color: colors.grey.dark
});

export default merge(
  fonts,
  globals
);
