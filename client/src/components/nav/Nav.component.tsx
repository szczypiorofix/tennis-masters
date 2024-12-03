import { NavContainer, NavList, NavListItem,NavListItemLink } from "./Nav.styled"

export const NavComponent: React.FC = () => {
    return <NavContainer>
        <NavList>
            <NavListItem>
                <NavListItemLink href="https://google.pl">Google Home</NavListItemLink>
            </NavListItem>
        </NavList>
    </NavContainer>
}