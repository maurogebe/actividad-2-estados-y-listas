import React from 'react';
import PrimaryCol from './primaryCol/primary-col';
import SidebarCol from './sidebarCol/sidebar-col';

// Importando base de datos
import { feed, user } from '../../source'
import { trend, trendLive } from '../../source-trends'

// Importando iconos
import {
    HeartOutline,
    RefreshOutline,
    AnnotationOutline,
    HeartSolid,
    RefreshSolid,
    AnnotationSolid,
    DotsHorizontalOutline,
    TrashSolid,
    PencilSolid,
    BadgeCheckSolid,
    SearchOutline,
} from "@graywolfai/react-heroicons";

class Main extends React.Component {

    constructor() {
        super();
        this.state = {
            users: user,
            tweetsNotMutable: feed,
            tweets: feed,
            trends: trend,
            trendsLive: trendLive,
            valueSearchUser: '',
            counter: 0,
            boolean: true,
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
            iconPencil: <PencilSolid />,
            iconSearch: <SearchOutline />,
        }
        this.newTweets = this.newTweets.bind(this)
        this.searchUser = this.searchUser.bind(this)
        this.filterTweetUser = this.filterTweetUser.bind(this)
        this.clearSearch = this.clearSearch.bind(this)
        this.quantityMoreMil = this.quantityMoreMil.bind(this)
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

    quantityMoreMil = (property) => {
        if(property > 1000) {
            const cloneProperty = (property / 1000) + ' mil'
            return cloneProperty
        } else 
        return property
    }

    showContextOptions = (index) => {
        const cloneArray = JSON.parse(JSON.stringify(this.state.tweets))
        cloneArray.forEach( ar => {
            if(ar === cloneArray[index]) {
                
            } else {
                ar.contextOptions = false
            }
        })
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

    searchUser(value) {
        this.setState({
            valueSearchUser: value
        })
    }

    filterTweetUser(value) {
        const newTweets = JSON.parse(JSON.stringify(this.state.tweetsNotMutable))
        const tweetUser = newTweets.filter( tweet => {
            if(tweet.profile === value) {
                return tweet
            }
        })
        this.setState({
            tweets: tweetUser
        })
    }

    clearSearch = () => {
        // const newTweets = JSON.parse(JSON.stringify(this.state.tweetsNotMutable))
        this.setState({
            tweets: this.state.tweetsNotMutable
        })
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
                    clearSearch={this.clearSearch}
                    functionSubmit={this.newTweets}
                    iconsOutline={this.state.iconsOutline}
                    iconsSolid={this.state.iconsSolid}
                    iconDots={this.state.iconDots}
                    iconTrash={this.state.iconTrash}
                    iconPencil={this.state.iconPencil}
                    iconBadge={this.state.iconBadge}
                    quantityMoreMilFn={this.quantityMoreMil}
                />
                <SidebarCol 
                    cambiarImagen={this.props.cambiarImagen} 
                    sourceTrendsLive={this.state.trendsLive}
                    sourceTrends={this.state.trends}
                    sourceUser={this.state.users}
                    catchValueSearchUser={this.searchUser}
                    valueSearchUser={this.state.valueSearchUser.toLocaleLowerCase()}
                    filteredSearchValue={this.filterTweetUser}
                    iconSearch={this.state.iconSearch}
                    iconBadge={this.state.iconBadge}
                    quantityMoreMilFn={this.quantityMoreMil}
                    iconDots={this.state.iconDots}
                />
            </div>
        )
    }
}

export default Main;