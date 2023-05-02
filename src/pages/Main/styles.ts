import styled from 'styled-components';

export const Root = styled.main`
    display: block;
`;

export const MainBackground = styled.div`
    background-color: #2a2c2f;
`;

export const MainWrapper = styled.div`
    max-width: 1180px;
    padding: 0 48px;
    margin: 0 auto;
    font-family: 'Inter', serif;

    @media (max-width: 420px) {
        max-width: 420px;
        padding: 0 10px;
    }
`;
