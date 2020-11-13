import React from "react";
import Tweet from "./tweet/tweet";

//Importando style
import './styles.css'


class Feed extends React.Component {

    render() {

        return (
            <div className="container">
                <Tweet
                    key={this.props.index}
                    profile={this.props.profile}
                    profileUrl={this.props.profileUrl}
                    username={this.props.username}
                    content={this.props.content}
                    interaction={this.props.interaction}
                    function={this.props.function}
                    index={this.props.index}
                    selected={this.props.selected}
                    deleteTweet={this.props.deleteTweet}
                    showContext={this.props.showContext}
                    contextOptions={this.props.contextOptions}
                    editTweet={this.props.editTweet}
                />
            </div>
        );
    }
}

export default Feed;