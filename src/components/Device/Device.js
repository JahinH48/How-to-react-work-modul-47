import React from 'react';
import Config from '../config/Config';

const Device = (props) => {
    return (
        <div>
            <h2>My Device : {props.name}</h2>
            <Config price={props.price} />
        </div>
    );
};

export default Device;