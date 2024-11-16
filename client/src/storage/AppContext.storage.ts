import { createContext } from 'react';

import { AppContectModel } from '../shared/models';

export const appContextDefaultState: AppContectModel = {
    version: "0.0.1",
};

export const AppContext = createContext<AppContectModel>(appContextDefaultState);
