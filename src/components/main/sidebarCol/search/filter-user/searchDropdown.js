import React from 'react'

// Importando estilos
import './styles.css'

// Importando componentes
import Icon from '../../../../global/icon/icon'


class SearchDropdown extends React.Component {
    
    render() {

        return (
            <a onClick={() => this.props.filteredSearchValue(this.props.profile)} className="container container--hover container--bg-azul-cielo container--p-relative" value={this.props.profile}>
                <img className="container__img-profile" src={this.props.profileUrl} alt="profile" />
                <h4 className="container__profile">{this.props.profile}</h4>
                <Icon source={this.props.iconBadge} iconModifier={`t-icon container__icon--badge`} />
                <h4 className="container__username container__username--font-normal">@{this.props.username}</h4>
            </a>
        )
    }
}

export default SearchDropdown