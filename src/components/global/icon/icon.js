import React from 'react';
import './styles.css';

const Icon = (props) => {
    return (
        <div className={props.iconModifier}>
            {props.source}
        </div>
    )
}

export default Icon;