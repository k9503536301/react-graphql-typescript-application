import * as React from 'react';
import { ChildProps } from "react-apollo";
import { connect } from 'react-redux';

import PersonItem from '../person-item/index';
import ErrorIndicator from '../error-indicator';
import { withGraphQLData } from '../hoc/with-graphql-data';
import { Variables, Nodes, Edges, IAppState } from '../../types';

interface IData {
    loading: boolean;
    error:boolean;
    search: Edges;
    variables: Variables;
    networkStatus: number;
}

interface IPersonListProps {
    location:string;
    data:IData;
}

class PersonList extends React.Component<ChildProps<IPersonListProps, Response>, {}> {
    public render() {
        const {loading, error} = this.props.data;

        const hasData = !(loading || error);
        const errorMessage = error ? <ErrorIndicator/> : null;
        const loadingBoard = loading ? <div className="alert alert-warning"> Данные загружаются </div> : null;
        const content = hasData ? this.props.data.search.edges.map((data:Nodes)=> <PersonItem key={data.node.id} person={data.node}/>) : null;

        return (
            <div className="container">
                {errorMessage}
                {loadingBoard}
                {content}
            </div>
        );
    }
}

const mapStateToProps = ({location}: IAppState) => {
    return { location }
};

export default connect(mapStateToProps)(withGraphQLData(PersonList));