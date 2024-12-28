import { NavComponentsProps } from '../models';
import { NavLiAStyled, NavLiStyled, NavStyled, NavUlStyled } from "./Nav.styled";

export const NavComponent = (props: NavComponentsProps): React.JSX.Element => {
    return <NavStyled>
        <NavUlStyled>
            { props.navList.list.map((navElement) => 
            <NavLiStyled key={'navList'+navElement.id}>
                <NavLiAStyled to={ navElement.urlPath }>{ navElement.title }</NavLiAStyled>
            </NavLiStyled>
            ) }
        </NavUlStyled>
    </NavStyled>
}
