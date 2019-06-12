import { ActionType } from 'typesafe-actions';
import * as actions from './store/actions';

export type appActions = ActionType<typeof actions>;

export interface IAppState {
    location: string;
    isEmptyLocation: boolean;
    error: boolean;
}

export type InputProps = {
    location:string
}
export type Variables = {
    name: string;
};

export type Node = {
    login: string;
    name:string;
    location:string;
    bio:string
    avatarUrl:string;
    id: string;
    url: string;
}

export type Nodes = { node: Node }

export type Edges = {
    edges: Nodes[]
}