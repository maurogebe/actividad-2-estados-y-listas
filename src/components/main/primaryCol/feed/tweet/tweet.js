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
                <OptionsTweet 
                    iconOptions={this.state.iconDots} 
                    iconTrash={this.state.iconTrash}
                />
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
                                        <div>
                                            <div onClick={() => this.props.function(this.props.index, positionNameInteraction[index])}>
                                                <Icon source={this.props.selected[nameInteraction] ? this.state.iconsSolid[index] : icon} iconModifier={this.props.selected[nameInteraction] ? 'selected' : ''}/>
                                            </div>
                                            <span className="t-icon__quantity">{this.quantityMoreMil(this.props.interaction[nameInteraction])}</span>
                                        </div>
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

// https://hipertextual.com/files/2012/06/twitter-bird-white-on-blue.jpg
//@TwitterSafety
//Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut risus et enim sodales congue sed ac ante. Maecenas tincidunt tortor vel lorem semper vestibulum. Phasellus placerat arcu ac dui ultricies, sed tempor dolor rhoncus. Cras id leo sem.