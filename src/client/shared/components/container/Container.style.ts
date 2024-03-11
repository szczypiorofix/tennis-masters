import styled from 'styled-components';

const CustomContainer = styled.div<{
    $flex?: boolean;
    $flexDirection?: string;
}>`
    display: ${(props): string => (props.$flex ? 'flex' : 'block')};
    flex-direction: ${(props): string => props.$flexDirection}
}
`;

export { CustomContainer };
