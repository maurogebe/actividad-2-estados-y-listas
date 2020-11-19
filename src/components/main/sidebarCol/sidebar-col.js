import React from 'react';

// Importando estilos
import './styles.css'

// Importando componentes
import Search from './search/search'
import Trend from './trend/trend'
import TrendLive from './trend/trend-live'


class SidebarCol extends React.Component {

    render() {

        const { name, live, title, img, category, categorySpecial, numberTweets, profile, profileName, username } = {
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
                <Search 
                    sourceUser={this.props.sourceUser}
                    catchValueSearchUser={this.props.catchValueSearchUser}
                    valueSearchUser={this.props.valueSearchUser}
                    filteredSearchValue={this.props.filteredSearchValue}
                    iconSearch={this.props.iconSearch}
                    iconBadge={this.props.iconBadge}
                />
                <div className="container-trend">
                    <h3 className="container-trend__title">Que esta pasando</h3>
                    {
                        this.props.sourceTrendsLive.map( trend => {
                            if(trend) {
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
                                return (
                                    <Trend 
                                        category={trend.category} 
                                        title={trend.title} 
                                        numberTweets={trend.numberTweets} 
                                        quantityMoreMilFn={this.props.quantityMoreMilFn}
                                        iconDots={this.props.iconDots}
                                    />
                                )
                        })
                        
                    }
                </div>
            </div>
        );
    }
}

export default SidebarCol;