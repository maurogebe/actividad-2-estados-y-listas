import React from 'react';
import './styles.css';



class PostTweet extends React.Component {

    render() {

        return(
            <div className="container">
                <div className="t-row t-post-tweet">
                    <div className="t-profile-img">
                        <img src={this.props.profileUrl}  alt="profile" />
                    </div>
                    <form onSubmit={(event) => this.props.functionSubmit(document.getElementById('contentTweet'), event)}>
                        <input placeholder="¿Qué está pasando?" id="contentTweet" />
                        <div className="t-post-options">
                            <button>Twittear</button>
                        </div>
                    </form>
                    
                </div>
            </div>
        )        
    }
}


export default PostTweet;