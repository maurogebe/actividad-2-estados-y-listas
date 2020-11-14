import React from 'react'

// Importando estilos
import './styles.css'

// Importando componentes
import Icon from '../../../global/icon/icon'
import FilterUser from './filter-user/filterUser'

// Importando base de datos
import { feed } from '../../../../source'

// Importando Iconos
import {
    SearchOutline,
    BadgeCheckSolid
} from "@graywolfai/react-heroicons";

class Search extends React.Component {

    constructor() {
        super()

        this.state = {
            user: feed,
            icon: <SearchOutline />,
            iconBadge: <BadgeCheckSolid />,
        }
        this.catchValue = this.catchValue.bind(this)
    }

    catchValue(event) {
        this.props.catchValueSearchUser(event.target.value)
    }
    
    render() {

        const { profile, profileName, username } = {
            profile: "",
            profileName: "",
            username: "",
        };

        const value = this.props.valueSearchUser

        return (
            <div className="container-search">
                <Icon source={this.state.icon} iconModifier={'container-search__icon'} />
                <input className="container-search__input" onChange={this.catchValue} type="text" id="search" placeholder="Buscar en Twitter" value={value} />
                <div className="container-search-user">
                    {
                        this.props.sourceUser
                        .filter( user => {
                            if(value === '') {
                                return null
                            } else {
                                return (
                                    user.profile
                                    .toLocaleLowerCase()
                                    .includes(value)
                                )
                            }
                        })
                        .map( user => {
                            return (
                                <FilterUser 
                                profileUrl={user.profileName}
                                profile={user.profile}
                                username={user.username}
                                iconBadge={this.state.iconBadge}
                            />
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default Search