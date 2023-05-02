import styled from 'styled-components';

export const Root = styled.section`
    padding: 0 92px 100px;

    @media (max-width: 420px) {
        padding: 0 10px 64px;
    }
`;

export const TitleWrapper = styled.div`
    max-width: 690px;
    padding-bottom: 40px;

    @media (max-width: 420px) {
        max-width: 300px;
        padding-bottom: 40px;
    }
`;

export const TextWrapper = styled.div`
    max-width: 770px;
    padding-bottom: 33px;

    @media (max-width: 420px) {
        max-width: 300px;
        padding-bottom: 34px;
    }
`;

export const IntroList = styled.ul`
    display: flex;
    flex-direction: column;
    row-gap: 8px;
    max-width: 920px;

    @media (max-width: 420px) {
        max-width: 300px;
    }
`;
