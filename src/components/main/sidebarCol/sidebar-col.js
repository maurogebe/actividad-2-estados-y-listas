import React from 'react';

// Importando estilos
import './styles.css'

// Importando componentes
import Search from './search/search'
import Trend from './trend/trend'
import TrendLive from './trend/trend-live'


class SidebarCol extends React.Component {

    constructor() {
        super()

        this.state = {
            counter: 0
        }
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
            <div className="container-sidebar-col">
                <Search 
                    sourceUser={this.props.sourceUser}
                    catchValueSearchUser={this.props.catchValueSearchUser}
                    valueSearchUser={this.props.valueSearchUser}
                />
                <div className="container-trend">
                    <h3 className="container-trend__title">Que esta pasando</h3>
                    {
                        this.props.sourceTrendsLive.map( trend => {
                            if(trend) {
                                this.state.counter++
                                return (
                                    <TrendLive name={trend.name} live={trend.live} title={trend.title} img={trend.img} category={trend.category} categorySpecial={trend.categorySpecial} />
                                )
                            }
                        })
                    }
                    {
                        this.props.sourceTrends.sort(function(b, a) {
                            return a.numberTweets - b.numberTweets
                        }).map( trend => {
                            if(this.state.counter <= 4) {
                                this.state.counter++
                                return (
                                    <Trend category={trend.category} title={trend.title} numberTweets={trend.numberTweets} />
                                )
                            }
                        })
                        
                    }
                </div>
            </div>
        );
    }
}

export default SidebarCol;