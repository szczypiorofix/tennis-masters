import { SortingButtonComponentModel } from '../models';
import { SortIconComponent as SortIcon } from './SortIcon.component';
import { SortingButtonStyled } from './Table.styled';

export const SortingButtonComponent = (props: SortingButtonComponentModel ): React.JSX.Element => {
    return <SortingButtonStyled
        onClick={ props.onClick }
    >
        <span>{ props.text }</span>
        <SortIcon
            active={ props.active }
            sortIcon={ props.sortIcon }
        />
    </SortingButtonStyled>
}
