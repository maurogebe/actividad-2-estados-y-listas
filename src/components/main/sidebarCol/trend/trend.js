import React from 'react'

//Importando estilos
import './styles.css'

// Importando Componentes
import Icon from '../../../global/icon/icon'

class Trend extends React.Component {

    render() {

        return (
            <div className="trend">
                <h5 className="trend__category">
                    {this.props.category}<span className="trend__live">{this.props.live}</span>
                    <Icon source={this.props.iconDots} iconModifier={'trend__icon'} />
                </h5>
                <p className="trend__title">{this.props.title}</p>
                <h5 className="trend__number-tweets">{this.props.quantityMoreMilFn(this.props.numberTweets)} Tweets</h5>
            </div>
        )
    }
}

export default Trend