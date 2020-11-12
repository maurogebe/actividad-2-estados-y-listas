import React from 'react';
import Icon from '../global/icon/icon';
import Logo from '../global/logo';
import {
    HomeSolid,
    HashtagOutline,
    BellOutline,
    MailOutline,
    UserOutline,
    DotsCircleHorizontalOutline
} from "@graywolfai/react-heroicons";
import Account from './account/account';
import './styles.css';

const Sidebar = (props) => {
    return (
        <div className="t-sidebar">
            <Logo/>
            <div className="t-icon-container">
                {
                    props.iconList.map( icon => {
                        return (
                            <Icon 
                                source={icon} 
                                iconModifier={'t-icon'} 
                            />
                        )
                    })
                }
            </div>
            <Account profileUrl={props.profileUrl}/>
        </div>
    )
}

export default Sidebar;