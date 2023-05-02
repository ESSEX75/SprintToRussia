import { createGlobalStyle } from 'styled-components';
import interBlack from './Inter-Black.ttf';
import interBold from './Inter-Bold.ttf';
import interRegular from './Inter-Regular.ttf';

export default createGlobalStyle`
  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 900;
    font-display: swap;
    src: local('interBlack'), url(${interBlack}) format('truetype');
  }

  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: local('interBold'), url(${interBold}) format('truetype');
  }

  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local('interRegular'), url(${interRegular}) format('truetype');;
  }
  
`;
