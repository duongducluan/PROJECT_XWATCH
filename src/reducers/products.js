const initialStateState = [
];
const fineIndex = (products, id) => {
    var index = -1;
    for (var i = 0; i < products.length; i++) {
        if (id === products[i].id) {
            index = i;
        }
    }
    return index
}
const products = (state = initialStateState, action) => {
    switch (action.type) {
        case 'FETCH-PRODUCTS':
            state = action.products
            return [...state];
        case 'SORT-MAX-MIN':     
              for (var i = 0; i < action.products.length; i++) {
                for (var j = i + 1; j < action.products.length; j++) {
                   // console.log(action.products[j].price)
                    if (parseFloat(action.products[i].price) < parseFloat(action.products[j].price)) {
                        var temp = action.products[i];
                        action.products[i] = action.products[j];
                        action.products[j] = temp
                }
            }
        }
        // if(action.products.length==20){
        //     for (var i = action.products.length; i < action.products.length; i++) {
        //         for (var j = i + 1; j < action.products.length; j++) {
        //            // console.log(action.products[j].price)
        //             if (parseFloat(action.products[i].price) < parseFloat(action.products[j].price)) {
        //                 var temp = action.products[i];
        //                 action.products[i] = action.products[j];
        //                 action.products[j] = temp
        //             }
        //         }
        //     }
        // }
            state = action.products
            return [...state];
            case 'SORT-Min-Max':
                for (var i = 0; i < action.products.length; i++) {
                    for (var j = i + 1; j < action.products.length; j++) {
                        //console.log(action.products[j].price)
                        if (action.products[i].price > action.products[j].price) {
                            var temp = action.products[i];
                            action.products[i] = action.products[j];
                            action.products[j] = temp
                        }
                    }
                }
            // }
            // if(action.products.length==20){
            //     for (var i = action.products.length; i < action.products.length; i++) {
            //         for (var j = i + 1; j < action.products.length; j++) {
            //             //console.log(action.products[j].price)
            //             if (action.products[i].price > action.products[j].price) {
            //                 var temp = action.products[i];
            //                 action.products[i] = action.products[j];
            //                 action.products[j] = temp
            //             }
            //         }
            //     }
            // }
                state = action.products
                return [...state];
        default: return [...state]
    }
}
export default products;