import React from 'react'

//Importando estilos
import './styles.css'

// Importando Componentes
import Icon from '../../../global/icon/icon'

// Importando Iconos
import {
    DotsHorizontalOutline
} from "@graywolfai/react-heroicons";

class Trend extends React.Component {

    constructor() {
        super()
        this.state = {
            icon: <DotsHorizontalOutline />
        }
    }

    quantityMoreMil = (property) => {
        if(property > 1000) {
            const cloneProperty = (property / 1000) + ' mil'
            return cloneProperty
        } else 
        return property
    }

    render() {

        return (
            <div className="trend">
                <h5 className="trend__category">
                    {this.props.category}<span className="trend__live">{this.props.live}</span>
                    <Icon source={this.state.icon} iconModifier={'trend__icon'} />
                </h5>
                <p className="trend__title">{this.props.title}</p>
                <h5 className="trend__number-tweets">{this.quantityMoreMil(this.props.numberTweets)} Tweets</h5>
            </div>
        )
    }
}

export default Trend