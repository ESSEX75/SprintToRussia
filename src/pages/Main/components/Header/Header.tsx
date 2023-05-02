import React from 'react';
import { Root, Logo, LangUl } from './style';
import { Typography } from '../../../../components';
import _logo from '../../../../assets/images/__logo.png';

const Header = () => {
    return (
        <Root>
            <Logo src={_logo} />
            <LangUl>
                <Typography
                    tag="li"
                    variant="regular"
                    sizeStyles="mainText"
                    textDecoration="underline"
                    textAlign="right"
                    color="#ffffff"
                >
                    Ru
                </Typography>
                <Typography
                    tag="li"
                    variant="regular"
                    sizeStyles="mainText"
                    textDecoration="none"
                    textAlign="right"
                    color="#ffffff"
                >
                    En
                </Typography>
            </LangUl>
        </Root>
    );
};

export default Header;
