 import axios from 'axios';
// class AxiosService{
//     constructor(){
//         const instance=axios.create();
//         instance.interceptors.response.use(this.handleSuccess,this.handleError)
//         this.instance=instance;
//     }
//     handleSuccess(response){
//         return response;
//     }
//     handleError(error){
//         raxieturn Promise.reject(error)
//     }
//     get(url){
//         return this.instance.get(url)
//     }
// }
// export default new AxiosService();
function callApiAccesories(method,body,enpoint){
    return axios({
        method:method,
        url: `https://5f40e17ba5e9db001630216a.mockapi.io/${enpoint}`,
        data:body,
    }).catch((err)=> {
        console.log("loi"+err)
        
 })
}
export default callApiAccesories;