import {createStore} from 'redux';
import {addReducer} from '../models/reducers/addreducer';

export const store=createStore(addReducer);
store.subscribe(()=>{
    console.log("Subscribe.....", store.getState());
});