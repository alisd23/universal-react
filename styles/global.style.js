import { style, merge, plugins } from 'glamor';
import fonts from './fonts.style';

// const autoPrefix = ({ selector, style }) => {
//
// }
//
// plugins.remove(plugins.fns[plugins.length - 1]);
// plugins.add(autoPrefix);

export const globals = style({
  color: 'red'
});

export default merge(
  fonts,
  globals
);
