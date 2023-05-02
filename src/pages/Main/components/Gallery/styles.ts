import styled from 'styled-components';

export const Root = styled.section`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(283px, auto));
    gap: 16px;
    padding-bottom: 92px;

    @media (max-width: 420px) {
        padding: 0 10px 64px;
    }
`;
export const GalleryImg = styled.img`
    width: 100%;
    border: none;
`;
