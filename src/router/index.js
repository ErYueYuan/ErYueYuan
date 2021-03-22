import Vue from 'vue';
import  Router from 'vue-router';
import  routesFile from './routes/index';

Vue.use(Router);

let router = new Router({
    mode:'history',//三种模式  hash带#号 使用URL hash值作为路由 不支持HTML5API   history 支持H5 API
    base:process.env.BAS_URL,
    routes:routesFile

})
router.beforeEach((to,from,next)=>{
     if(to.meta.title){
         document.title = to.meta.title
     }
     next()
})
export default router
