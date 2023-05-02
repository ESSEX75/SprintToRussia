import React from 'react';

export interface ITypography {
    tag: string;
    children: string | React.ReactNode;
    className?: string;
    textDecoration: string;
    textAlign: string;
    color: string;
    variant: 'bold' | 'regular';
    sizeStyles: 'h1Title' | 'h2Title' | 'subTitle' | 'mainText' | 'subText';
}

export interface IStyleTypography {
    className?: string;
    textDecoration: string;
    textAlign: string;
    color: string;
    variant: 'bold' | 'regular';
    sizeStyles: 'h1Title' | 'h2Title' | 'subTitle' | 'mainText' | 'subText';
}

//React.Component
