import styled from 'styled-components';

export const Root = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 92px 100px;

    @media (max-width: 420px) {
        padding: 0 10px 64px;
    }
`;

export const TitleWrapper = styled.div`
    max-width: 720px;
    padding-bottom: 32px;

    @media (max-width: 420px) {
        max-width: 300px;
        padding-bottom: 16px;
    }
`;

export const SubTitleWrapper = styled.div`
    max-width: 640px;
    padding-bottom: 64px;

    @media (max-width: 420px) {
        max-width: 300px;
        padding-bottom: 40px;
    }
`;

export const CoupeImage = styled.img`
    width: 964px;
    height: 615px;
    border: none;

    @media (max-width: 420px) {
        width: 320px;
        height: 200px;
    }
`;

export const FigCaptionCoupeWrapper = styled.figcaption`
    padding: 8px 0 0;
`;
