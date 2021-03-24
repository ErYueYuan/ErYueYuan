import axios from 'axios';
import DataSource from "@/common/DataSource";

let base = '';
if (process.env.NODE_ENV === 'development') {
    base = ''
} else {
    base = '/play'
}
axios.defaults.withCredentials = true;// 表示跨域请求时是否需要使用凭证
//请求前拦截 配置每次请求在请求头中携带token
axios.interceptors.request.use(config=>{
    let token = DataSource.get('tonken',1)
    if(config){
        config.headers['token'] = token
        return config;
    }
},
    err=>{
        return Promise.reject(err)
    }
)

//请求后拦截
axios.interceptors.response.use(config=>{
return config;
},err=>{
    return Promise.reject(err)
})

//通用方法
export const POST = (url,params,)=>{
    return axios.post(`${base}${url}`,params).then(res=>{res.data})
}
export const GET = (url,params)=>{
    return axios.get(`${base}${url}`,{params:params}).then(res=>{res.data})
}
export const PUT = (url,params)=>{
    return axios.put(`${base}${url}`,params).then(res=>{res.data})
}
export const Del = (url,params)=>{
    return axios.delete(`${base}${url}`,{params:params}).then(res=>{res.data})
}
