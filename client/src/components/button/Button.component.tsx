import React from 'react';

import { ButtonComponentProps } from '../models/ButtonComponent.model';
import { ButtonStyled } from './Button.styled';

export const ButtonComponent = (props: { content: ButtonComponentProps }): React.JSX.Element => {
    return <ButtonStyled>
        { props.content.contentText }
    </ButtonStyled>;
};

