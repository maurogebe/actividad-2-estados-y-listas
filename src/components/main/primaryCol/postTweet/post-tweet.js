import React from 'react';
import './styles.css';

// Importando componentes
import Tweet from '../feed/tweet/tweet'

// Importando base de datos
import {myProfile, myTweet} from '../../../../source';


class PostTweet extends React.Component {

    constructor() {
        super() 

        this.state = {
            myTweet: myTweet,
            myProfile: myProfile,
            value: ''
        }
    }

    newTweet (event) {
        event.preventDefault()
        const valueTweet = document.getElementById('contentTweet')
        const cloneMyTweet = JSON.parse(JSON.stringify(myTweet))
        const content = cloneMyTweet.content
        content.push(valueTweet.value)
        // this.setState() {
        //     myTweet:
        // }
        console.log(cloneMyTweet)
    }

    render() {

        return(
            <div>
                <div className="t-row t-post-tweet">
                    <div className="t-profile-img">
                        <img src={this.props.profileUrl}  alt="profile" />
                    </div>
                    <form onSubmit={this.newTweet}>
                        <input placeholder="¿Qué está pasando?" id="contentTweet" />
                        <div className="t-post-options">
                            <button>Twittear</button>
                        </div>
                    </form>
                    
                </div>
                {/* <Tweet /> */}
            </div>
        )        
    }
}


export default PostTweet;