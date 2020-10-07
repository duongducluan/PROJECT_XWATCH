
import f1 from "./../img/f1.PNG";
import f2 from "./../img/f2.PNG";
import f3 from "./../img/f3.PNG";
import f4 from "./../img/f4.PNG";
import f5 from "./../img/f5.PNG";
import f6 from "./../img/f6.PNG";
import f7 from "./../img/f7.PNG";
let initialState= [
    {
      img1: f1,
      img2: "https://xwatch.vn/images/products/menufactories/original/hang-bently_1569042227.png",
      img3: "https://xwatch.vn/images/products/menufactories/original/brand-bulova_1561519549.png",
      name:"B"
    },
    {
      img1: f2,
      img2: "https://xwatch.vn/images/products/menufactories/original/brand-elixa_1561519538.png",
      img3: "",
      name:"C"
    },
    {
      img1: f3,
      img2: "https://xwatch.vn/images/products/menufactories/original/brand-elixa_1561519538.png",
      img3: "E"
    },
    {
      img1: f4,
      img2: "https://xwatch.vn/images/products/menufactories/original/brand-festina_1592444667.png",
      img3: "https://xwatch.vn/images/products/menufactories/original/brand-freelook_1570673916.png",
      name:"F"
    },
    {
      img1: f5,
      img2: "https://xwatch.vn/images/products/menufactories/original/brand-michael-kors_1561517765.png",
      img3: "",
      name:"M"
    },
    {
      img1: f6,
      img2: "https://xwatch.vn/images/products/menufactories/original/brand-ogival_1561519995.png",
      img3: "https://xwatch.vn/images/products/menufactories/original/1_1562147820.png",
      name:"O"
    },
    {
      img1: f7,
      img2: "https://xwatch.vn/images/products/menufactories/original/brand-seiko_1561519576.png",
      img3: "https://xwatch.vn/images/products/menufactories/original/srwatch-brand_1572316117.png",
      name:"S"
    }
  ]
  var img=(state=initialState,action)=>{
      switch(action.type){
       case 'ADD-IMG':
        state=initialState
        var items=state.filter((item)=>{
                 return action.value===item.name
        })
           return [...items];
           default: return [...state]
      }
  }
  export default img;