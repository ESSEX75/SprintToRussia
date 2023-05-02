import React from 'react';
import { Root, FooterNav, FooterUl, Copyright } from './style';
import { Typography } from '../../../../components';

const Footer = () => {
    return (
        <Root>
            <FooterNav>
                <FooterUl>
                    <Typography
                        tag="li"
                        variant="regular"
                        sizeStyles="subText"
                        textDecoration="none"
                        textAlign="right"
                        color="#ffffff"
                    >
                        Карты
                    </Typography>
                    <Typography
                        tag="li"
                        variant="regular"
                        sizeStyles="subText"
                        textDecoration="none"
                        textAlign="right"
                        color="#ffffff"
                    >
                        Погода
                    </Typography>
                    <Typography
                        tag="li"
                        variant="regular"
                        sizeStyles="subText"
                        textDecoration="none"
                        textAlign="right"
                        color="#ffffff"
                    >
                        Расписание
                    </Typography>
                    <Typography
                        tag="li"
                        variant="regular"
                        sizeStyles="subText"
                        textDecoration="none"
                        textAlign="right"
                        color="#ffffff"
                    >
                        Календарь
                    </Typography>
                    <Typography
                        tag="li"
                        variant="regular"
                        sizeStyles="subText"
                        textDecoration="none"
                        textAlign="right"
                        color="#ffffff"
                    >
                        Путешествия
                    </Typography>
                </FooterUl>
            </FooterNav>
            <Copyright>
                <Typography
                    tag="p"
                    variant="regular"
                    sizeStyles="subText"
                    textDecoration="none"
                    textAlign="right"
                    color="#ffffff"
                >
                    © 2020. Впишите своё имя
                </Typography>
            </Copyright>
        </Root>
    );
};

export default Footer;
