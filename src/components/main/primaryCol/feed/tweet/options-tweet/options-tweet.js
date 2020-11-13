import React from "react";

//Importando style
import './styles.css'

// Importando iconos
import Icon from '../../../../../global/icon/icon'


class OptionsTweet extends React.Component {

    constructor() {
        super()
        this.state = {
            optionsSelected: false
        }
    }

    render() {

        return (
            <div className="tweet-options">
                <div className="tweet-options__options" id={`tweet-options__options ${this.props.id}`}>
                    <h6 onClick={() => this.props.deleteTweet(this.props.index)} className="tweet-options__option">
                        Delete
                        <Icon
                            source={this.props.iconTrash} 
                            iconModifier={`tweet-options__icon--size-15`}
                        />
                    </h6>
                    <h6 onClick={() => this.props.editTweet(this.props.index)} className="tweet-options__option">
                        Editar
                        <Icon 
                            source={this.props.iconPencil} 
                            iconModifier={`tweet-options__icon--size-15`}
                        />
                    </h6>
                </div>
            </div>
        );
    }
}

export default OptionsTweet;