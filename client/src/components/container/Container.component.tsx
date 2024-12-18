import React from 'react';

import { ContainerDivStyled } from './Container.styled';

export const ContainerComponent = (props: { children: React.ReactNode }): React.JSX.Element => {
    return <ContainerDivStyled>
        { props.children }
    </ContainerDivStyled>;
};
