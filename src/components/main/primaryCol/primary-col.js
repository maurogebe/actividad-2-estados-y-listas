import React from 'react';
import PostTweet from './postTweet/post-tweet';
import Feed from './feed/feed';

// Importando base de datos
import {feed} from '../../../source';

// Importando estilos
import './styles.css'

class PrimaryCol extends React.Component {

    constructor() {
        super();
        this.state = {
            tweets: feed,
        }
        this.newTweets = this.newTweets.bind(this)
    }

    clickInteraction = (index, interaction) => {
        const cloneTweets = JSON.parse(JSON.stringify(this.state.tweets))
        
        if(cloneTweets[index].selected[interaction]) {
            cloneTweets[index].interaction[interaction]--
            cloneTweets[index].selected[interaction] = false
        } else {
            cloneTweets[index].interaction[interaction]++
            cloneTweets[index].selected[interaction] = true
        }
        this.setState({
            tweets: cloneTweets,
        })
    }


    newTweets (value, event) {
        event.preventDefault()

        const cloneMyTweet = JSON.parse(JSON.stringify(this.state.tweets))

        let newTweet = {
            profile: "Mauricio Guerra",
            profileName: "https://i.imgur.com/YsfXKkN.jpg",
            username: "maurogebe",
            content: value,
            interaction: {
                comments: 0,
                retweets: 0,
                likes: 0
            },
            selected: {
                comments: false,
                retweets: false,
                likes: false
            },
            verified: false,
            blocked: false
        }

        cloneMyTweet.unshift(newTweet)

        this.setState({
            tweets: cloneMyTweet
        })
    }

    render() {

        return (
            <div className="t-col-container">
                <h3>Inicio</h3>
                <PostTweet 
                    profileUrl={this.props.profileUrl}
                    functionSubmit={this.newTweets}
                    // functionEvent={this.eventPrevent}
                />
                {
                    this.state.tweets.map((tweet, index) => {
                        return (
                            <Feed 
                                key={index}
                                profile={tweet.profile}
                                profileUrl={tweet.profileName}
                                username={tweet.username}
                                content={tweet.content}
                                interaction={tweet.interaction}
                                function={this.clickInteraction}
                                index={index}
                                selected={tweet.selected}
                            />
                        )
                    })
                }
            </div>
        )
    }
}

export default PrimaryCol;