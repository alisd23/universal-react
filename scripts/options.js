import args from 'command-line-args';

const optionDefs = [
  { name: 'dev', type: Boolean, defaultOption: false }
];
const options = args(optionDefs);

export default options;
