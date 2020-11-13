import React from 'react'

// Importando estilos
import './styles.css'

// Importando componentes
import Icon from '../../../../global/icon/icon'

// Importando Iconos
import {
    SearchOutline
} from "@graywolfai/react-heroicons";

class FilterUser extends React.Component {

    constructor() {
        super()

        this.state = {
            icon: <SearchOutline />
        }
    }
    
    render() {

        return (
            <a className="container container--hover container--bg-azul-cielo container--p-relative">
                <img className="container__img-profile" src={this.props.profileUrl} alt="profile" />
                <h4 className="container__profile">{this.props.profile}</h4>
                <Icon source={this.props.iconBadge} iconModifier={`t-icon container__icon--badge`} />
                <h4 className="container__username container__username--font-normal">@{this.props.username}</h4>
            </a>
        )
    }
}

export default FilterUser