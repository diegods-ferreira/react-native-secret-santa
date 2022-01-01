import 'styled-components';
import theme from '../global/styles/theme';

declare module 'styled-components' {
  type ThemeType = typeof theme.light;

  export interface DefaultTheme extends ThemeType {}
}
