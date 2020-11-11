import React from 'react';

// Importando estilos
import './styles.css'

// Importando componentes
import Search from './search/search'
import Trend from './trend/trend'
import TrendLive from './trend/trend-live'

// Importando base de datos
import { trend, trendLive } from '../../../source-trends'


class SidebarCol extends React.Component {

    constructor() {
        super();

        this.state = {
            trends: trend.sort(function(b, a) {
                return a.numberTweets - b.numberTweets
            }),
            trendsLive: trendLive,
            counter: 0,
            boolean: true
        }
    }

    // trendsPopular = () => {
    //     // let cloneTrends = JSON.parse(JSON.stringify(this.state.trends))
    //     // cloneTrends.sort(function(a,b) {
    //     //     return a.numberTweets - b.numberTweets;
    //     // });
    //     this.setState({
    //         trends: this.state.trends.sort(function(a,b) {
    //             return a.numberTweets - b.numberTweets;
    //         })
    //     })
    // }

    render() {

        // if(this.state.boolean) {
        //     this.trendsPopular()
        //     this.setState({
        //         boolean: false
        //     })
        //     console.log(this.state.trends)
        // }

        const { name, live, title, img, category, categorySpecial, numberTweets } = {
            name: "" ,
            live: "" ,
            title: "" ,
            img: "" ,
            category: "" ,
            categorySpecial: "" ,
            numberTweets: "",
        };

        return (
            <div className="container-sidebar-col">
                <Search />
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
                        this.state.trends.map( trend => {
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