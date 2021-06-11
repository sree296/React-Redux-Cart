import {combineReducers} from 'redux';
import {productReducer, selectedProductsReducer} from '../reducers/productReducer'; 

const reducers = combineReducers({
    allProducts : productReducer,
    product: selectedProductsReducer,
});

export default reducers;