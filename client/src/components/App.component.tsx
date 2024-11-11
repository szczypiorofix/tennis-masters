import React, { useState } from 'react';

import { AppContext, appContextDefaultState } from '../storage/AppContext.storage';
import { AppContectModel } from '../models/AppContext.model';
import { Header } from './header/Header.component';

const App: React.FC = ({children}) => {
    const [ state ] = useState<AppContectModel>(appContextDefaultState);
    return <AppContext.Provider value={ state } >
        <Header />
        { children }
    </AppContext.Provider>
}

export default App;
