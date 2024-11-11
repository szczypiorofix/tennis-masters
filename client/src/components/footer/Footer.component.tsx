import React from 'react';
import styled from 'styled-components';

const Copyrights = styled.div`
  font-size: 0.8em;
  text-align: center;
  color: black;
`;

export const Footer: React.FC = () => {
    return <header>
        <Copyrights>
            Copyrights 2024 Tennis Masters - Wszelkie Prawa Zastrzeżone. 
        </Copyrights>
    </header>
}
