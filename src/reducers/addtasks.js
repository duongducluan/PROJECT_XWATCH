var initiallState=[];
const fineIndex=(products,id)=>{
    var index=-1;
    for(var i=0;i<products.length;i++){
       // products[i].id=id
        if(id===products[i].id){
          //  products[i].id=id
          index=i;
        }
    }
    return index
}
var todos=JSON.parse(localStorage.getItem('tasks'))
var initiallState=todos? todos:[];
const tasks=(state=initiallState,action)=>{
    switch(action.type){
        case 'ADD-PRODUCT':
    var index=fineIndex(state,action.product.id)    
       if(index===-1){
           state.push(action.product)
           localStorage.setItem('tasks',JSON.stringify(state))
         }
         return [...state]
        case 'GET-PRODUCT':
            console.log(state)
            console.log(state)
         return [...state]
        case 'COUNT':
            var index=fineIndex(state,action.id)
            if(index!==-1){
            state[index].amount=action.value;
            localStorage.setItem('tasks',JSON.stringify(state))
            }
             return [...state]
             case 'TOTAL-MONEY':
            var index=fineIndex(state,action.id)
            if(index!==-1){
                console.log(parseFloat(state[index].price))
            var sumPrice=action.value * parseFloat(state[index].price);
            state[index].sumPrice=sumPrice.toFixed(6)
            localStorage.setItem('tasks',JSON.stringify(state))
            }
             return [...state]
        case 'REMOVE-PRODUCT':
            var index=fineIndex(state,action.id) 
           state.splice(index,1)
           localStorage.setItem('tasks',JSON.stringify(state))
            return [...state]
        case 'REMOVE-ALL':
            state.splice(0,state.length)
            localStorage.setItem('tasks',JSON.stringify(state))
            return [...state]  
            default: return [...state];
        }
}
export default tasks;