//入口文件
import Vue from 'vue'

// 导入 VueRouter 包
import VueRouter from 'vue-router'
// 安装 VueRouter
Vue.use(VueRouter)

// 定义全局的时间过滤器，格式化时间
Vue.filter('dateFormat', function (dateStr) {
    var dt = new Date(dateStr);
    var y = dt.getFullYear();
    var m = (dt.getMonth() + 1).toString().padStart(2, '0');
    var d = (dt.getDate()).toString().padStart(2, '0');
    var hh = dt.getHours().toString().padStart(2, '0');
    var mm = dt.getMinutes().toString().padStart(2, '0');
    var ss = dt.getSeconds().toString().padStart(2, '0');
    return `${y}-${m}-${d} ${hh}:${mm}:${ss}`;
})

// 导入 VueResource
import VueResouce from 'vue-resource'
// 安装 VueResource
Vue.use(VueResouce)
// 配置VueResource请求http api的根路径
Vue.http.options.root = 'http://www.liulongbin.top:3005';
// 全局设置 post 时候表单数据的格式组织形式
Vue.http.options.emulateJSON = true;

// 按需导入 Mint-UI 中的组件 
// import { Header, Swipe, SwipeItem, Button } from 'mint-ui'
// Vue.component(Header.name, Header)
// Vue.component(Swipe.name, Swipe)
// Vue.component(SwipeItem.name, SwipeItem)
// Vue.component(Button.name, Button)
import MintUI from 'mint-ui'
Vue.use(MintUI)
import 'mint-ui/lib/style.css'

// 安装 图片预览插件
import VuePreview from 'vue-preview'
Vue.use(VuePreview)

// 导入 mui 的样式
import './lib/mui/css/mui.min.css'
// 导入扩展图标样式
import './lib/mui/css/icons-extra.css'

// 导入自定义的路由模块
import router from './router.js'

import VueLazyLoad from 'vue-lazyload'
Vue.use(VueLazyLoad)

// 导入 App 的根组件
import app from './App.vue'

var vm = new Vue({
    el: "#app",
    render: c => c(app),
    router
})