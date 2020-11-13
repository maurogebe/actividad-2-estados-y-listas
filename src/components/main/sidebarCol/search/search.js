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
            searchUser: ''
        }
    }

    searchUser = (event) => {
        const user = event.target.value
        this.setState({
            searchUser: user
        })
    }
    
    render() {

        const { profile, profileName, username } = {
            profile: "",
            profileName: "",
            username: "",
        };

        return (
            <div className="container-search">
                <Icon source={this.state.icon} iconModifier={'container-search__icon'} />
                <input className="container-search__input" onChange={this.searchUser} type="text" id="search" placeholder="Buscar en Twitter" value={this.state.searchUser} />
                <div className="container-search-user">
                    {
                        this.state.user
                        .filter( user => {
                            if(this.state.searchUser === '') {
                                return null
                            } else {
                                return (
                                    user.profile
                                    .toLocaleLowerCase()
                                    .includes(this.state.searchUser.toLocaleLowerCase())
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