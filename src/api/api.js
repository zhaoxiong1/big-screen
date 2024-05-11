import http from '../utils/http'
// 
/**
 *  @parms resquest 请求地址 例如：http://197.82.15.15:8088/request/...
 *  @param '/testIp'代表vue-cil中config，index.js中配置的代理
 */
let resquest = "http://localhost:8080"

 
// get请求
export default{
 	getListAPI(params,url){
    	return http.get(`${resquest}/admin/list`,params)
	},
	 Login(params){
    	return http.post(`${resquest}/admin/login`,params)
	}
}