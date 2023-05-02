import React from 'react';
import { Typography } from '../../../../components';
import { CoverSubTitleWrapper, CoverTitleWrapper, Root, CoverBackground } from './styles';

const Cover = () => {
    return (
        <Root>
            <CoverBackground target={'_blank'} href={'https://stampsy.com/na-elektrichkakh-do-baikala'}>
                <CoverTitleWrapper>
                    <Typography
                        tag="p"
                        variant="bold"
                        sizeStyles="h2Title"
                        textDecoration="none"
                        textAlign="center"
                        color="#ffffff"
                    >
                        До Байкала «на собаках»
                    </Typography>
                </CoverTitleWrapper>
                <CoverSubTitleWrapper>
                    <Typography
                        tag="p"
                        variant="regular"
                        sizeStyles="subTitle"
                        textDecoration="none"
                        textAlign="center"
                        color="#ffffff"
                    >
                        По мотивам учебной темы о Транссибе — путешествие от столицы до Байкала на электричках.
                    </Typography>
                </CoverSubTitleWrapper>
            </CoverBackground>
        </Root>
    );
};

export default Cover;
