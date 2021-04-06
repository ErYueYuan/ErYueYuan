import Vue from "vue";
import Vuex from "vuex";
import loginInfo from "@/store/routers/loginInfo";
Vue.use(Vuex);
export default new Vue.store({
    modules:{
        loginInfo
    }
})
