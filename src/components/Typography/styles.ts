import styled from 'styled-components';
import React from 'react';
import { IStyleTypography, ITypography } from './types';

const styleVariants = {
    bold: {
        fontWeight: '900',
    },
    regular: {
        fontWeight: '400',
    },
    base: {
        fontWeight: '400',
    },
};

const fontSizeStyles = {
    screen1280: {
        h1Title: {
            fontSize: '96px',
            lineHeight: '100%',
        },
        h2Title: {
            fontSize: '72px',
            lineHeight: '120%',
        },
        subTitle: {
            fontSize: '30px',
            lineHeight: '120%',
        },
        mainText: {
            fontSize: '18px',
            lineHeight: '163%',
        },
        subText: {
            fontSize: '14px',
            lineHeight: '163%',
        },
        base: {
            fontSize: '18px',
            lineHeight: '163%',
        },
    },
    screen420: {
        h1Title: {
            fontSize: '40px',
            lineHeight: '100%',
        },
        h2Title: {
            fontSize: '32px',
            lineHeight: '120%',
        },
        subTitle: {
            fontSize: '16px',
            lineHeight: '120%',
        },
        mainText: {
            fontSize: '16px',
            lineHeight: '140%',
        },
        subText: {
            fontSize: '14px',
            lineHeight: '163%',
        },
        base: {
            fontSize: '16px',
            lineHeight: '163%',
        },
    },
};

export const StyleTypography = (Component: React.FC<ITypography>) => styled(Component)<IStyleTypography>`
    margin: 0;
    color: ${({ color }) => color || '#FFFFFF'};
    text-decoration: ${({ textDecoration }) => textDecoration};
    text-align: ${({ textAlign }) => textAlign};
    font-weight: ${({ variant }) => styleVariants[variant || 'base'].fontWeight};
    font-size: ${({ sizeStyles }) => fontSizeStyles.screen1280[sizeStyles || 'base'].fontSize};
    line-height: ${({ sizeStyles }) => fontSizeStyles.screen1280[sizeStyles || 'base'].lineHeight};

    @media (max-width: 420px) {
        margin: 0;
        color: ${({ color }) => color || '#FFFFFF'};
        text-decoration: ${({ textDecoration }) => textDecoration};
        text-align: ${({ textAlign }) => textAlign};
        font-weight: ${({ variant }) => styleVariants[variant || 'base'].fontWeight};
        font-size: ${({ sizeStyles }) => fontSizeStyles.screen420[sizeStyles || 'base'].fontSize};
        line-height: ${({ sizeStyles }) => fontSizeStyles.screen420[sizeStyles || 'base'].lineHeight};
    }
`;

/*export const StyleTypography = (Component: React.FC<ITypography>) => styled(Component)<IStyleTypography>`
  font-family: "interBold", serif;
  padding: 0;
  margin: ${({margin}) => margin};
  color: ${({color}) => color || "#E01F70"};
  font-size: ${({fontSize}) => fontSize};
  font-weight: ${({fontWeight}) => fontWeight};
  text-decoration: ${({textDecoration}) => textDecoration};
`;*/
