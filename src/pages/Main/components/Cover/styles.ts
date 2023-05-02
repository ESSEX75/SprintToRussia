import styled from 'styled-components';
import coverBackground from '../../../../assets/images/__background.jpg';

export const Root = styled.section`
    padding-top: 12px;
    padding-bottom: 92px;

    @media (max-width: 420px) {
        padding: 0 0 64px;
    }
`;
export const CoverBackground = styled.a`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 740px;
    background: url(${coverBackground}) no-repeat center;
    background-size: cover;
    text-decoration: none;
    position: relative;

    &::before {
        content: '';
        background-color: #000000;
        opacity: 0.3;
        width: 100%;
        height: 100%;
        position: absolute;
    }

    /*    content: '';
    
    background-color: rgba(0, 0, 0, 0.3);
}*/

    &:hover {
        &::before {
            content: '';
            background-color: #000000;
            opacity: 0.5;
            width: 100%;
            height: 100%;
            position: absolute;
        }
    }

    @media (max-width: 420px) {
        width: 100%;
        height: 300px;
    }
`;

export const CoverTitleWrapper = styled.div`
    max-width: 560px;
    z-index: 1;
    padding-bottom: 32px;

    @media (max-width: 420px) {
        max-width: 300px;
        padding-bottom: 16px;
    }
`;
export const CoverSubTitleWrapper = styled.div`
    max-width: 660px;
    z-index: 1;

    @media (max-width: 420px) {
        max-width: 300px;
    }
`;
