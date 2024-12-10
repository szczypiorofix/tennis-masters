import React from 'react';

import { ContainerDiv } from './Container.styled';

export const ContainerComponent = (props: { children: React.ReactNode }): React.JSX.Element => {
    return <ContainerDiv>
        { props.children }
    </ContainerDiv>;
};
