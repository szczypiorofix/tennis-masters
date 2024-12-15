import React, { useState } from 'react';

import { ContainerDivStyled } from './components/container/Container.styled';
import { FooterComponent as Footer } from './components/footer/Footer.component';
import { HeaderComponent as Header } from './components/header/Header.component';
import { AppContectModel } from './shared/models';
import { AppContext, appContextDefaultState } from './storage/AppContext.storage';

export const App = (props: { children: React.ReactNode }): React.JSX.Element => {
    const [ state ] = useState<AppContectModel>(appContextDefaultState);
    return <AppContext.Provider value={ state } >
        <ContainerDivStyled $fullWidth >
            <Header />
            { props.children }
            <Footer />
        </ContainerDivStyled>
    </AppContext.Provider>;
};
