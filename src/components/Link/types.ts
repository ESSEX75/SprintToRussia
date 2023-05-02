export interface ILink {
    children: string;
    className?: string;
    textDecoration: string;
    textAlign: string;
    color: string;
    href: string;
    variant: 'bold' | 'regular';
    sizeStyles: 'h1Title' | 'h2Title' | 'subTitle' | 'mainText' | 'subText';
}

export interface IStyleLink {
    className?: string;
    textDecoration: string;
    textAlign: string;
    color: string;
    href: string;
    variant: 'bold' | 'regular';
    sizeStyles: 'h1Title' | 'h2Title' | 'subTitle' | 'mainText' | 'subText';
}

//React.Component
