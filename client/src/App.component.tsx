import React, { useState } from 'react';

import { AppContext, appContextDefaultState } from './storage/AppContext.storage';
import { AppContectModel } from './shared/models';
import { Header } from './components/header/Header.component';
import { Footer } from './components/footer/Footer.component';

const App: React.FC = ({children}) => {
    const [ state ] = useState<AppContectModel>(appContextDefaultState);
    return <AppContext.Provider value={ state } >
        <Header />
        { children }
        <Footer />
    </AppContext.Provider>
}

export default App;
