import React from 'react'

// Importando estilos
import './styles.css'

// Importando componentes
import Icon from '../../../global/icon/icon'

// Importando Iconos
import {
    SearchOutline
} from "@graywolfai/react-heroicons";

class Search extends React.Component {

    constructor() {
        super()

        this.state = {
            icon: <SearchOutline />
        }
    }
    
    render() {

        return (
            <div className="container-search">
                <Icon source={this.state.icon} iconModifier={'container-search__icon'} />
                <input className="container-search__input" type="search" id="search" placeholder="Buscar en Twitter" />
            </div>
        )
    }
}

export default Search