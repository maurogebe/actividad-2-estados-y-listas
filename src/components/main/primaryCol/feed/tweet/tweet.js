import React from 'react';
import './styles.css';

// Importando componentes
import Icon from '../../../../global/icon/icon'
import OptionsTweet from './options-tweet/options-tweet'

// Importando iconos
import {
    HeartOutline,
    RefreshOutline,
    AnnotationOutline,
    HeartSolid,
    RefreshSolid,
    AnnotationSolid,
    BadgeCheckSolid,
    DotsHorizontalOutline,
    TrashSolid,
    PencilSolid,
} from "@graywolfai/react-heroicons";

class Tweet extends React.Component{
    constructor() {
        super()

        this.state = {
            iconsOutline: [
                <AnnotationOutline />,
                <RefreshOutline />,
                <HeartOutline />,
            ],
            iconsSolid: [
                <AnnotationSolid />,
                <RefreshSolid />,
                <HeartSolid />
            ],
            iconBadge: <BadgeCheckSolid />,
            iconDots: <DotsHorizontalOutline />,
            iconTrash: <TrashSolid />,
            iconPencil: <PencilSolid />,
            options: false
        }
        
    }

    quantityMoreMil = (property) => {
        if(property > 1000) {
            const cloneProperty = (property / 1000) + ' mil'
            return cloneProperty
        } else 
        return property
    }

    options() {
        document.getElementById()
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
                        source={this.state.iconDots} 
                        iconModifier={`tweet-container__icon`} 
                    />
                </div>
                
                {
                    this.props.contextOptions ? <OptionsTweet iconTrash={this.state.iconTrash} iconPencil={this.state.iconPencil} deleteTweet={this.props.deleteTweet} editTweet={this.props.editTweet} index={this.props.index}/> : null
                }
                <div className="c1 c1--m-right">
                    <img src={this.props.profileUrl} alt="profile" />
                </div>
                <div>
                    <div className="row">
                        <div className="c2 c2--flex">
                            <h6>{this.props.profile}</h6>
                            <Icon source={this.state.iconBadge} iconModifier={`t-icon c2__icon--badge`} />
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
                                this.state.iconsOutline.map((icon, index) => {
                                    let nameInteraction = positionNameInteraction[index]
                                    return (
                                        <>
                                            <div className="container-interaction">
                                                <div onClick={() => this.props.function(this.props.index, positionNameInteraction[index])}>
                                                    <Icon source={this.props.selected[nameInteraction] ? this.state.iconsSolid[index] : icon} iconModifier={this.props.selected[nameInteraction] ? 'selected' : ''}/>
                                                </div>
                                                <span className="t-icon__quantity">{this.quantityMoreMil(this.props.interaction[nameInteraction])}</span>
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