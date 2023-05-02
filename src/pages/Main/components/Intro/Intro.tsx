import React from 'react';
import { Typography } from '../../../../components';
import { IntroList, Root, TitleWrapper, TextWrapper } from './styles';

const Intro = () => {
    return (
        <Root>
            <TitleWrapper>
                <Typography
                    tag="h2"
                    variant="bold"
                    sizeStyles="h2Title"
                    textDecoration="none"
                    textAlign="left"
                    color="#ffffff"
                >
                    Чего мы там не видели?
                </Typography>
            </TitleWrapper>
            <TextWrapper>
                <Typography
                    tag="p"
                    variant="regular"
                    sizeStyles="mainText"
                    textDecoration="none"
                    textAlign="left"
                    color="#ffffff"
                >
                    По опросам ВЦИОМ, 95% россиян мечтают куда-нибудь поехать, но только 36% планируют провести отпуск в
                    родной стране. Мол, чего мы тут, дома, не видели? На самом деле, Россия — это целая вселенная с
                    ласковым морем юга, густыми лесами Саян и суровыми льдами плато Путорана. А ещё увидеть все эти
                    красоты можно без миллионов на счету, загранпаспорта и многочасовых перелетов. Как, например, Вера
                    Башмакова — смелая молодая мама, которая взяла в охапку троих детей, усадила их в свою «Ладу» и
                    проехала 20 тысяч километров по родной стране. Мы выбрали и описали некоторые интересные места,
                    достойные вашего отпуска.
                </Typography>
            </TextWrapper>
            <IntroList>
                <Typography
                    tag="li"
                    variant="regular"
                    sizeStyles="mainText"
                    textDecoration="none"
                    textAlign="left"
                    color="#ffffff"
                >
                    Часовых поясов
                    <Typography
                        tag="span"
                        variant="bold"
                        sizeStyles="mainText"
                        textDecoration="none"
                        textAlign="left"
                        color="#ffffff"
                    >
                        &nbsp;11
                    </Typography>
                </Typography>
                <Typography
                    tag="li"
                    variant="regular"
                    sizeStyles="mainText"
                    textDecoration="none"
                    textAlign="left"
                    color="#ffffff"
                >
                    Объектов природного наследия ЮНЕСКО
                    <Typography
                        tag="span"
                        variant="bold"
                        sizeStyles="mainText"
                        textDecoration="none"
                        textAlign="left"
                        color="#ffffff"
                    >
                        &nbsp;12
                    </Typography>
                </Typography>
                <Typography
                    tag="li"
                    variant="regular"
                    sizeStyles="mainText"
                    textDecoration="none"
                    textAlign="left"
                    color="#ffffff"
                >
                    Объектов культурного наследия ЮНЕСКО
                    <Typography
                        tag="span"
                        variant="bold"
                        sizeStyles="mainText"
                        textDecoration="none"
                        textAlign="left"
                        color="#ffffff"
                    >
                        &nbsp;16
                    </Typography>
                </Typography>
                <Typography
                    tag="li"
                    variant="regular"
                    sizeStyles="mainText"
                    textDecoration="none"
                    textAlign="left"
                    color="#ffffff"
                >
                    Природных заповедников
                    <Typography
                        tag="span"
                        variant="bold"
                        sizeStyles="mainText"
                        textDecoration="none"
                        textAlign="left"
                        color="#ffffff"
                    >
                        &nbsp;105
                    </Typography>
                </Typography>
                <Typography
                    tag="li"
                    variant="regular"
                    sizeStyles="mainText"
                    textDecoration="none"
                    textAlign="left"
                    color="#ffffff"
                >
                    Аэропортов
                    <Typography
                        tag="span"
                        variant="bold"
                        sizeStyles="mainText"
                        textDecoration="none"
                        textAlign="left"
                        color="#ffffff"
                    >
                        &nbsp;241
                    </Typography>
                </Typography>
            </IntroList>
        </Root>
    );
};

export default Intro;
