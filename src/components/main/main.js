import React from 'react';
import PrimaryCol from './primaryCol/primary-col';
import SidebarCol from './sidebarCol/sidebar-col';

// Importando base de datos
import { feed } from '../../source'
import { trend, trendLive } from '../../source-trends'

// Importando iconos
import {
    BadgeCheckSolid,
} from "@graywolfai/react-heroicons";

class Main extends React.Component {

    constructor() {
        super();
        this.state = {
            tweets: feed,
            trends: trend,
            trendsLive: trendLive,
            valueSearchUser: '',
            counter: 0,
            boolean: true,
            iconBadge: <BadgeCheckSolid />
        }
        this.newTweets = this.newTweets.bind(this)
        this.searchUser = this.searchUser.bind(this)
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
            content: value.value,
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

        value.value = ''
    }

    showContextOptions = (index) => {
        const cloneArray = JSON.parse(JSON.stringify(this.state.tweets))
        cloneArray.forEach( ar => ar.contextOptions = false)
        cloneArray[index].contextOptions = !cloneArray[index].contextOptions
        this.setState({
            tweets: cloneArray
        })
        console.log(cloneArray[index].contextOptions, index)
    }

    removeTweet = (index) => {
        const cloneArray = JSON.parse(JSON.stringify(this.state.tweets))
        cloneArray.splice(index, 1)
        this.setState({
            tweets: cloneArray
        })
    }

    editTweet = (index) => {
        const cloneArray = JSON.parse(JSON.stringify(this.state.tweets))
    }

    searchUser(value) {
        this.setState({
            valueSearchUser: value
        })
        console.log(this.state.valueSearchUser)
    }

    

    render() {
        
        const { name, live, title, img, category, categorySpecial, numberTweets, profile, profileName, username } = {
            name: "" ,
            live: "" ,
            title: "" ,
            img: "" ,
            category: "" ,
            categorySpecial: "" ,
            numberTweets: "",
            profile: "",
            profileName: "",
            username: "",
        };

        return (
            <div className="t-main">
                <PrimaryCol 
                    profileUrl={this.props.profileUrl} 
                    sourceTweets={this.state.tweets}
                    function={this.clickInteraction}
                    deleteTweet={this.removeTweet}
                    showContext={this.showContextOptions}
                    editTweet={this.editTweet}
                />
                <SidebarCol 
                    cambiarImagen={this.props.cambiarImagen} 
                    sourceTrendsLive={this.state.trendsLive}
                    sourceTrends={this.state.trends}
                    sourceUser={this.state.tweets}
                    catchValueSearchUser={this.searchUser}
                    valueSearchUser={this.state.valueSearchUser.toLocaleLowerCase()}
                />
            </div>
        )
    }
}

export default Main;