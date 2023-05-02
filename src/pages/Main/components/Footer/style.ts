import styled from 'styled-components';

export const Root = styled.footer`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 56px;

    @media (max-width: 420px) {
        padding-bottom: 15px;
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: start;
    }
`;

export const FooterNav = styled.nav``;

export const FooterUl = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    gap: 18px;

    @media (max-width: 420px) {
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: start;
    }
`;

export const Copyright = styled.div`
    max-width: 200px;

    @media (max-width: 420px) {
        padding-top: 15px;
    }
`;
