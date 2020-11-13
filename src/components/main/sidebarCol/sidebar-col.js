import React from 'react';

// Importando estilos
import './styles.css'

// Importando componentes
import Search from './search/search'
import Trend from './trend/trend'
import TrendLive from './trend/trend-live'

// Importando base de datos
import { trend, trendLive } from '../../../source-trends'
// import { feed } from '../../../source'

// Importando iconos
import {
    BadgeCheckSolid,
} from "@graywolfai/react-heroicons";


class SidebarCol extends React.Component {

    constructor() {
        super();

        this.state = {
            trends: trend,
            trendsLive: trendLive,
            // tweetProfile: feed,
            counter: 0,
            boolean: true,
            iconBadge: <BadgeCheckSolid />
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
                    // tweetProfile={this.state.tweetProfile}
                />
                <div className="container-trend">
                    <h3 className="container-trend__title">Que esta pasando</h3>
                    {
                        this.state.trendsLive.map( trend => {
                            if(trend) {
                                this.state.counter++
                                return (
                                    <TrendLive name={trend.name} live={trend.live} title={trend.title} img={trend.img} category={trend.category} categorySpecial={trend.categorySpecial} />
                                )
                            }
                        })
                    }
                    {
                        this.state.trends.sort(function(b, a) {
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