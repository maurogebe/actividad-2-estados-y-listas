import React from "react";
import Tweet from "./tweet/tweet";
import {feed} from '../../../../source';


class Feed extends React.Component {
    constructor() {
        super();
        this.state = {
            tweets: feed,
        }
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
            tweets: cloneTweets
        })
    }

    render() {

        return (
            <div>
                {
                    this.state.tweets.map((tweet, index) => {
                        return (
                            <Tweet
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
        );
    }
}

export default Feed;