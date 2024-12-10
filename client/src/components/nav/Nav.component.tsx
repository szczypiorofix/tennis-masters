import { NavComponentsProps } from '../models';
import { NavContainer, NavLi, NavLiA, NavUl} from "./Nav.styled"

export const NavComponent = (props: NavComponentsProps): React.JSX.Element => {
    return <NavContainer>
        <NavUl>
            { props.navList.list.map((navElement) => 
            <NavLi key={'navList'+navElement.id}>
                <NavLiA $active={navElement.id === props.navList.activeId} href={ navElement.urlPath }>{ navElement.title }</NavLiA>
            </NavLi>
            ) }
        </NavUl>
    </NavContainer>
}