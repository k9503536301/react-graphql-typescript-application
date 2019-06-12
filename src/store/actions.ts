import { action } from 'typesafe-actions';

export const addLocation = (location:string) => action('ADD_LOCATION', location);
