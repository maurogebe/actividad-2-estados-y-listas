import React from 'react'

// Importando estilos
import './styles.css'

// Importando componentes
import Icon from '../../../global/icon/icon'
import SearchDropdown from './filter-user/searchDropdown'

class Search extends React.Component {

    constructor() {
        super()
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
                <Icon source={this.props.iconSearch} iconModifier={'container-search__icon'} />
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
                                <SearchDropdown 
                                    profileUrl={user.profileName}
                                    profile={user.profile}
                                    username={user.username}
                                    iconBadge={this.props.iconBadge}
                                    filteredSearchValue={this.props.filteredSearchValue}
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