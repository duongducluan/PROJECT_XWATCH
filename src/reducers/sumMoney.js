const initialStateState=1;
 const sum=()=>{
    var todos=JSON.parse(localStorage.getItem('tasks'))
       var task=todos.reduce((a,b)=>{
        var c=parseFloat(b.sumPrice)
        console.log(c)
           return a + c
       },0)
       return task
 }
const summoney=(state=initialStateState,action)=>{
    switch(action.type){
            case 'SUM-MONEY':
              state=sum().toFixed(6)
               return state
              default: return state
    }
}
export default summoney;