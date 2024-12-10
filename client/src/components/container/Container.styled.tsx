import styled from 'styled-components';

const ContainerDiv = styled.div<{ $fullWidth?: boolean; }>`
    width: ${props => props.$fullWidth ? "100%" : "80%"};
    margin: 0 auto;
`;

export { ContainerDiv };
