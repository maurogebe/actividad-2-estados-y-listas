import React from 'react';
import PostTweet from './postTweet/post-tweet';
import Feed from './feed/feed';

// Importando base de datos
// import {feed} from '../../../source';

// Importando estilos
import './styles.css'

class PrimaryCol extends React.Component {

    render() {

        return (
            <div className="t-col-container">
                <h3 className="title" onClick={this.props.clearSearch}>Inicio</h3>
                <PostTweet 
                    profileUrl={this.props.profileUrl}
                    functionSubmit={this.props.functionSubmit}
                />
                {
                    this.props.sourceTweets.map((tweet, index) => {
                        return (
                            <Feed 
                                key={index}
                                profile={tweet.profile}
                                profileUrl={tweet.profileName}
                                username={tweet.username}
                                content={tweet.content}
                                interaction={tweet.interaction}
                                function={this.props.function}
                                index={index}
                                selected={tweet.selected}
                                deleteTweet={this.props.deleteTweet}
                                showContext={this.props.showContext}
                                contextOptions={tweet.contextOptions}
                                editTweet={this.props.editTweet}
                            />
                        )
                    })
                }
            </div>
        )
    }
}

export default PrimaryCol;