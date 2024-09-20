import { antfu } from '@antfu/eslint-config';

export default antfu({
  react: true,
  lessOpinionated: true,
  isInEditor: false,
  stylistic: { semi: true, quotes: 'single' },
});
