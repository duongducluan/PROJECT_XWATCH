const initialStateState={}
const product=(state=initialStateState,action)=>{
    switch(action.type){
            case 'FETCH-ITEM-PRODUCT':
                state=action.product
                 return state
              default: return state
    }
}
export default product;