import React, { useState } from 'react';

import { AppContext, appContextDefaultState } from '../storage/AppContext.storage';
import { AppContectModel } from '../models/AppContext.model';
import { Header } from './header/Header.component';

export const App: React.FC = () => {
    const [state] = useState<AppContectModel>(appContextDefaultState);
    return <AppContext.Provider
        value={ state }
    >
        <Header></Header>
    </AppContext.Provider>
}
