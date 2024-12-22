import { SortIconComponentModel } from "../models"
import { SortIconStyled } from "./Table.styled"

export const SortIconComponent = (props: SortIconComponentModel): React.JSX.Element => {
    return <SortIconStyled
        $active={ props.active }
    >{ props.sortIcon }</SortIconStyled>
}