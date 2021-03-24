let DataSource={};//定义全局本地缓存
// eslint-disable-next-line no-unused-vars
function toStr(val){// 序列化 深拷贝
    if(val != null &&  typeof  val == 'object'){
        return JSON.stringify(val)
    }
    return  val;
}
//转成对象
// eslint-disable-next-line no-unused-vars
function strObj(val){
    let obj = val;
    if(val){
        try {
            obj = JSON.parse(val)
        }catch (e){
            obj = val;
        }
    }
    return obj;
}
DataSource.LOCAL = 1;
DataSource.SESSION = 2;
//获取
DataSource.get=(key,scope)=>{
    let data;
    if(scope === 1){
        data = localStorage.getItem(key)
    }else if(scope === 2){
        data = sessionStorage.getItem(key)
    }
    if(data){
        data = strObj(data)
    }
    return data;
}
//设置
DataSource.set=(key,data,scope)=>{
    let _data = toStr(data);
    if(scope === 1){
        localStorage.set(key,_data)
    }else if(scope === 2){
        sessionStorage.set(key,_data)
    }
}
//删除
DataSource.delete=(key,scope)=>{
    if(scope === 1){
        localStorage.removeItem(key)
    }else if(scope === 2){
        sessionStorage.removeItem(key)
    }
}
//清除
DataSource.clean = (scope)=>{
    if(scope ===1){
        localStorage.clear()
    }else if(scope === 2){
        sessionStorage.clear()
    }else {
        localStorage.clear()
        sessionStorage.clear()
    }
}
export default DataSource