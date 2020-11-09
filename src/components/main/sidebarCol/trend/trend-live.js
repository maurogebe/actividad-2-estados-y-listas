import React from 'react'

//Importando estilos
import './styles.css'


class TrendLive extends React.Component {

    render() {

        return (
            <div className="trend-live">
                <div>
                    <h5 className="trend-live__category">
                        {this.props.name}<span className="trend-live__live"> {this.props.live}</span>
                    </h5>
                    <p className="trend-live__title">{this.props.title}</p>
                </div>
                <img className="trend-live__img" src={this.props.img} />
                <h5 className="trend-live__category">
                    {this.props.category}
                    <span className="trend-live__category-special">{this.props.categorySpecial}</span>
                </h5>
            </div>
        )
    }
}

export default TrendLive