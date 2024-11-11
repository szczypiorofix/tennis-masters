import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 2.25em;
  text-align: center;
  color: #BF4F74;
`;

export const Header: React.FC = () => {
    return <header>
        <Title>Tennis Masters</Title>
    </header>
}
