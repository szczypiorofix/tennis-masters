import React from 'react';
import styled from 'styled-components';

import { Props } from '../../shared/models';

const HeaderComponent = styled.header`
    background-color: #ffffff;
    width: 100%;
    overflow: hidden;
    transition: 0.3s cubic-bezier(0.5, 0, 0.5, 0.95);
    box-shadow: 0 2px 20px #0000001e;
    z-index: 1;
`;

export const Header: React.FC<Props> = (props: Props) => {
    return <HeaderComponent>{props.children}</HeaderComponent>;
};
