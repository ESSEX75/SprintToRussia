import { createElement, useMemo, FC } from 'react';
import { ILink, IStyleLink } from './types';
import { StyleTypography } from './styles';

const Link: FC<ILink> = ({ variant, sizeStyles, textDecoration, textAlign, color, href, ...rest }) => {
    /*   const childToRender = useMemo( () => {
        if (
            typeof children === "number" ||
            ( typeof children === "string" && children.length > 0) ||
            (Array.isArray(children) && children.some( (elem) => typeof elem === "string" || typeof elem === "number"))
        ){
            return children
        }
    }, [children])*/
    //console.log(`tag ${tag} style ${style} position ${position} texDecoration ${textDecoration}`);

    return createElement<IStyleLink>(
        'a',
        {
            className: rest.className,
            href,
            variant,
            sizeStyles,
            textDecoration,
            textAlign,
            color,
        },
        rest.children,
    );
};

export default StyleTypography(Link);
