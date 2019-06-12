import * as React from 'react';
import { connect } from 'react-redux';

import PersonList from '../person-list';
import ErrorIndicator from '../error-indicator';
import Form from '../form';
import { IAppState } from '../../types';

import './app.css';

export interface IAppProps {
    isEmptyLocation: boolean,
    error: boolean
}

const App  = (props: IAppProps) => {
    const { isEmptyLocation, error } = props;

    const hasData = !(isEmptyLocation || error);
    const errorMessage = error ? <ErrorIndicator/> : null;
    const content = hasData ? <PersonList/> : null;

    return (
        <div className="container">
            <Form/>
            {errorMessage}
            {content}
        </div>
    );
};

const mapStateToProps = ({ isEmptyLocation, error }: IAppState) =>{
    return { isEmptyLocation, error };
};

export default  connect(mapStateToProps)(App);
