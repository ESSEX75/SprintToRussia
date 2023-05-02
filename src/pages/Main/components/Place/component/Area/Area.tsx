import React, { FC } from 'react';
import { IArea } from './type';
import { Root, UrlWrapper, AreaImg, AreaParagraphs, LinkWrapper, TitleWrapper, Paragraph } from './style';
import { Typography } from '../../../../../../components';
import { Link } from '../../../../../../components/Link';

const Area: FC<IArea> = ({ title, img, url, paragraph1, paragraph2, src }) => {
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
                    {title}
                </Typography>
            </TitleWrapper>
            <LinkWrapper>
                <UrlWrapper>
                    <Typography
                        tag="p"
                        variant="regular"
                        sizeStyles="subText"
                        textDecoration="none"
                        textAlign="left"
                        color="#AAAAAA"
                    >
                        URL
                    </Typography>
                </UrlWrapper>
                <Link
                    variant="regular"
                    sizeStyles="mainText"
                    textDecoration="underline"
                    textAlign="left"
                    color="#ffffff"
                    href={src}
                >
                    {url}
                </Link>
            </LinkWrapper>
            <AreaImg src={img} />
            <AreaParagraphs>
                <Paragraph>
                    <Typography
                        tag="p"
                        variant="regular"
                        sizeStyles="mainText"
                        textDecoration="none"
                        textAlign="left"
                        color="#ffffff"
                    >
                        {paragraph1}
                    </Typography>
                </Paragraph>
                <Paragraph>
                    <Typography
                        tag="p"
                        variant="regular"
                        sizeStyles="mainText"
                        textDecoration="none"
                        textAlign="left"
                        color="#ffffff"
                    >
                        {paragraph2}
                    </Typography>
                </Paragraph>
            </AreaParagraphs>
        </Root>
    );
};

export default Area;

//text-overflow: ellipsis; white-space: nowrap; overflow: hidden;
