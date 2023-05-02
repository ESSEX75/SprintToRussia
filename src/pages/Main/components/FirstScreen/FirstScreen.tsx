import { Typography } from '../../../../components';
import { CoupeImage, FigCaptionCoupeWrapper, Root, TitleWrapper, SubTitleWrapper } from './styles';
import coupe from '../../../../assets/images/Coupe.jpg';
import React from 'react';

const FirstScreen = () => {
    return (
        <Root>
            <TitleWrapper>
                <Typography
                    tag="h1"
                    variant="bold"
                    sizeStyles="h1Title"
                    textDecoration="none"
                    textAlign="center"
                    color="#ffffff"
                >
                    Путешествие по Роcсии
                </Typography>
            </TitleWrapper>
            <SubTitleWrapper>
                <Typography
                    tag="p"
                    variant="regular"
                    sizeStyles="subTitle"
                    textDecoration="none"
                    textAlign="center"
                    color="#ffffff"
                >
                    Настоящая страна не в выпусках новостей, а здесь.
                </Typography>
            </SubTitleWrapper>
            <figure>
                <CoupeImage src={coupe} />
                <FigCaptionCoupeWrapper>
                    <Typography
                        tag="figcaption"
                        variant="regular"
                        sizeStyles="subText"
                        textDecoration="none"
                        textAlign="left"
                        color="#ffffff"
                    >
                        ваша полка — верхняя
                    </Typography>
                </FigCaptionCoupeWrapper>
            </figure>
        </Root>
    );
};

export default FirstScreen;
