import * as React from 'react';

import { Node } from "../../types";
import './person-item.css';


interface IPersonItemProps {
    person: Node
}

const PersonItem =({ person }:IPersonItemProps) => {
    const {avatarUrl, login, name, location, bio, url} = person;

    return(
        <div className="row person">
            <div>
                <img src={ avatarUrl } alt="avatar" />
            </div>

            <div>
                <div className="row">
                    <a  href={url}> {login} &nbsp;</a>
                    <p> {name} </p>
                </div>
                <div className="row">
                    {bio}
                </div>

                <div className="location">
                    <i className="fa fa-map-marker"/>
                    &nbsp; {location}
                </div>

            </div>
        </div>

    )
};

export default PersonItem;