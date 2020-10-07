import {combineReducers} from 'redux';
import products from './products';
import product from './product';
import tasks from './addtasks';
import monyall from './sumMoney';
import imgtrademark from './imgtrademark';
const appReducers=combineReducers({
    products:products,
    product:product,
    tasks:tasks,
    monyall:monyall,
    imgtrademark:imgtrademark
})
export default appReducers;