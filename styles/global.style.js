import { style, merge } from 'glamor';
import fonts from './fonts.style';

export const globals = style({
  color: 'red'
});

export default merge(
  fonts,
  globals
);
