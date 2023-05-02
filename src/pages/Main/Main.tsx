import React from 'react';
import { Root, MainWrapper, MainBackground } from './styles';
import { Header, Place, Footer, Intro, FirstScreen, Gallery, Cover } from './components';

const Main = () => {
    return (
        <MainBackground>
            <MainWrapper>
                <Header />
                <Root>
                    <FirstScreen />
                    <Intro />
                    <Gallery />
                    <Place />
                    <Cover />
                    <Footer />
                </Root>
            </MainWrapper>
        </MainBackground>
    );
};

export default Main;
