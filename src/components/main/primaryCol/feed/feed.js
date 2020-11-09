import React from "react";
import Tweet from "./tweet/tweet";
import {feed} from '../../../../source';

// Importando iconos
// import { faComment } from '@fortawesome/free-regular-svg-icons'

class Feed extends React.Component {
    constructor() {
        super();
        this.state = {
            tweets: feed,
        }
    }

    render() {

        const {profile, profileName, username, content, display, interaction} = {
            profile: "",
            profileName: "",
            username: "",
            content: "",
            display: "",
            interaction: ""
        };

        return (
            <div>
                {
                    this.state.tweets.map( tweet => {
                        return (
                            <Tweet
                                profile={tweet.profile}
                                profileUrl={tweet.profileName}
                                username={tweet.username}
                                content={tweet.content}
                                interaction={tweet.interaction}
                                // quantityComments={tweet.interaction.comments}
                                // quantityRetweets={tweet.interaction.retweets}
                                // quantityLikes={tweet.interaction.likes}
                            />
                        )
                    })
                }
                
            </div>
        );
    }
}

export default Feed;