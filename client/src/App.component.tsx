import React, { useState } from 'react';

import { FooterComponent as Footer } from './components/footer/Footer.component';
import { HeaderComponent as Header } from './components/header/Header.component';
import { AppContectModel } from './shared/models';
import { AppContext, appContextDefaultState } from './storage/AppContext.storage';

export const App: React.FC = ({ children }) => {
    const [ state ] = useState<AppContectModel>(appContextDefaultState);
    return <AppContext.Provider value={ state } >
        <Header />
        { children }
        <Footer />
    </AppContext.Provider>;
};
