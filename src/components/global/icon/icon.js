import React from 'react';
import './styles.css';

const Icon = (props) => {
    return (
        <div className={`t-icon ${props.iconModifier}`} id={props.id}>
            {props.source}
            <span className="t-icon__quantity">{props.quantityInteraction}</span>
        </div>
    )
}

export default Icon;