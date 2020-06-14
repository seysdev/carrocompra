import { createGlobalStyle } from 'styled-components';
import { reset } from './reset';
import { FONT_FAMILY, SIZES } from './typography.js';

const GlobalStyle = createGlobalStyle`
    ${reset}
    html {
        font-size: ${SIZES.base}%;
    }

    body {
        font-size: ${SIZES.default}rem;
        font-family: ${FONT_FAMILY.default}
    }

    a {
        text-decoration: none;
    }
`;

export { GlobalStyle };
