import callApi from './../commons/axiosService';
import callApiAccesories from './../commons/axiosServiceAccesories';
// GET  LISTOCLOCK
export const getData = (enpoint) => {
    return (dispatch) => {
        callApi('GET', null, `${enpoint}`).then(res => {
            dispatch(actFetchProducrs(res.data))
        });
    }
}
export const getItemProduct = (id,enpoint) => {
    return (dispatch) => {
        callApi('GET', null, `${enpoint}/${id}`).then(res => {
            dispatch(fetchItemProduct(res.data))
        })
    }
}
export const getDataAccesories = (enpoint) => {
    return (dispatch) => {
        callApiAccesories('GET', null, `${enpoint}`).then(res => {
            dispatch(actFetchProducrs(res.data))
        });
    }
}
export const getItemProductAccesories = (id,enpoint) => {
    return (dispatch) => {
        callApiAccesories('GET', null, `${enpoint}/${id}`).then(res => {
            console.log(res)
            dispatch(fetchItemProduct(res.data))
        })
    }
}
export const actFetchProducrs = (products) => {
    return {
        type: 'FETCH-PRODUCTS',
        products: products
    }
}
export const fetchItemProduct = (product) => {
    return {
        type: 'FETCH-ITEM-PRODUCT',
        product: product,
    }
}
export const sortMaxMin=(products,value)=>{
    return{
        type:'SORT-MAX-MIN',
        products:products,
        value:value
    }
}
export const sortMinMax=(products,value)=>{
    return{
        type:'SORT-Min-Max',
        products:products,
        value:value
    }
}
// GET TASKSOCLOCK
export const addProductInCart = (product,tasks) => {
    return {
        type: 'ADD-PRODUCT',
        product: product,
    }
}
export const getProductInCart = () => {
    return {
        type: 'GET-PRODUCT',
    }
}
export const removeProduct=(id,tasks)=>{
    return{
        type:'REMOVE-PRODUCT',
        id:id,
        tasks:tasks
    }
}
export const count=(value,id)=>{
    return{
        type:'COUNT',
        value:value,
        id:id
    }
}
export const Money=(value,id)=>{
    return{
        type:'TOTAL-MONEY',
        value:value,
        id:id
    }
}
export const sumMoney=(tasks)=>{
    return{
        type:'SUM-MONEY',
        tasks:tasks,     
    }
}
export const removeAllremoveAll=()=>{
    return{
        type:'REMOVE-ALL',
    }
}
//==============TRADEMARK PAGES============///
export const addImg=(value)=>{
    return{
        type:'ADD-IMG',
        value
    }
}