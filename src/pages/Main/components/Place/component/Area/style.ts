import styled from 'styled-components';

export const Root = styled.div`
    display: grid;
    grid-template-columns: 460px auto;
    gap: 40px 40px;
    padding-bottom: 80px;

    @media (max-width: 420px) {
        display: inherit;
        padding-bottom: 50px;
    }
`;

export const UrlWrapper = styled.div`
    padding-bottom: 12px;

    @media (max-width: 420px) {
        max-width: 300px;
        padding-bottom: 12px;
    }
`;

export const LinkWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: start;
    max-width: 456px;

    @media (max-width: 420px) {
        max-width: 300px;
        padding-bottom: 32px;
    }
`;

export const AreaImg = styled.img`
    width: 460px;
    height: 460px;
    border: none;

    @media (max-width: 420px) {
        padding-bottom: 32px;
        width: 320px;
        height: 320px;
    }
`;

export const AreaParagraphs = styled.div`
    max-width: 484px;

    @media (max-width: 420px) {
        max-width: 300px;
        padding-bottom: 25px;
    }
`;

export const TitleWrapper = styled.div`
    max-width: 460px;

    @media (max-width: 420px) {
        padding-bottom: 32px;
    }
`;

export const Paragraph = styled.div`
    @media (max-width: 420px) {
        padding-bottom: 25px;

        &:last-child {
            padding-bottom: 0;
        }
    }
`;
