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
        cloneTweets[index].interaction[interaction]++
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
                                profile={tweet.profile}
                                profileUrl={tweet.profileName}
                                username={tweet.username}
                                content={tweet.content}
                                interaction={tweet.interaction}
                                function={this.clickInteraction}
                                index={index}
                            />
                        )
                    })
                }
            </div>
        );
    }
}

export default Feed;