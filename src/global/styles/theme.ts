import fonts from './fonts';
import boxShadow from './boxShadow';

export default {
  light: {
    colors: {
      background: '#f5f8fe',
      shape: '#ffffff',
      primary: '#338afc',
      secondary: '#b6d9fa',
      attention: '#dc2522',
      title: '#2C3E50',
      subtitle: '#34495E',
      text: '#49444b',
      text_secondary: '#BDC3C7',
      placeholder: '#dddddd',
    },
    fonts,
    boxShadow,
  },
  dark: {
    colors: {
      background: '#212121',
      shape: '#333333',
      primary: '#26CF83',
      secondary: '#a7e5c9',
      attention: '#ff5c58',
      title: '#86E9BD',
      subtitle: '#BAF2D9',
      text: '#f7f7f7',
      text_secondary: '#afb2b1',
      placeholder: '#666666',
    },
    fonts,
    boxShadow,
  },
};
