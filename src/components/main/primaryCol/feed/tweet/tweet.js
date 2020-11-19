import React from 'react';
import './styles.css';

// Importando componentes
import Icon from '../../../../global/icon/icon'
import OptionsTweet from './options-tweet/options-tweet'

class Tweet extends React.Component{
    constructor() {
        super()

        this.state = {
            options: false
        }
        
    }

    render(){

        const positionNameInteraction = [
            'comments',
            'retweets',
            'likes'
        ]


        return (
            <div className="tweet-container">
                <div className="position-absolute width-auto" onClick={() => this.props.showContext(this.props.index)}>
                    <Icon 
                        source={this.props.iconDots} 
                        iconModifier={`tweet-container__icon`} 
                    />
                </div>
                
                {
                    this.props.contextOptions ? <OptionsTweet iconTrash={this.props.iconTrash} iconPencil={this.props.iconPencil} deleteTweet={this.props.deleteTweet} editTweet={this.props.editTweet} index={this.props.index}/> : null
                }
                <div className="c1 c1--m-right">
                    <img src={this.props.profileUrl} alt="profile" />
                </div>
                <div>
                    <div className="row">
                        <div className="c2 c2--flex">
                            <h6>{this.props.profile}</h6>
                            <Icon source={this.props.iconBadge} iconModifier={`t-icon c2__icon--badge`} />
                            <h6 className="c2__title c2__title--m-left c2__title--font-normal">@{this.props.username}</h6>
                        </div>
                        <div className="c3"></div>
                    </div>
                    <div className="row">
                        <p className="content">
                        {this.props.content}
                        </p>
                    </div>
                    <div className='container-icons'>
                            {
                                this.props.iconsOutline.map((icon, index) => {
                                    let nameInteraction = positionNameInteraction[index]
                                    return (
                                        <>
                                            <div className="container-interaction">
                                                <div onClick={() => this.props.function(this.props.index, positionNameInteraction[index])}>
                                                    <Icon source={this.props.selected[nameInteraction] ? this.props.iconsSolid[index] : icon} iconModifier={this.props.selected[nameInteraction] ? 'selected' : ''}/>
                                                </div>
                                                <span className="t-icon__quantity">{this.props.quantityMoreMilFn(this.props.interaction[nameInteraction])}</span>
                                            </div>
                                        </>
                                    )
                                })
                            }
                    </div>
                </div>
            </div>
        )
    }
}

export default Tweet;