import styled from 'styled-components';

export const Root = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-self: center;
    padding: 56px 0;

    @media (max-width: 420px) {
        padding: 20px 10px 48px;
    }
`;

export const Logo = styled.img`
    width: 176px;
    height: 52px;
    border-style: none;

    @media (max-width: 420px) {
        width: 142px;
        height: 42px;
    }
`;

export const LangUl = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-self: center;
    gap: 18px;
`;
