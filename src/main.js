// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import 'assets/js/hack'
import Vue from 'vue'
import store from './store'
import router from './router'
import App from './App'
import axios from 'axios'
import fastclick from 'fastclick'
import mmToast from 'base/mm-toast'
import VueLazyload from 'vue-lazyload'
import vConsole from 'vconsole'
fastclick.attach(document.body);
import '@/assets/css/index.less'

//网络请求
Vue.prototype.$http = axios;

//优化移动端300ms点击延迟
fastclick.attach(document.body);

//弹出层
Vue.use(mmToast);

//懒加载
Vue.use(VueLazyload, {
    preLoad: 1,
    loading: require('assets/img/default.png'),
    filter:{
        progressive (listener, options) {
            const isHttp = /http|\/\//
            if (isHttp.test(listener.src)) {
                listener.src=listener.src.replace('http','https')
            }
        }
    }
});

const redirectList = ['/music/details', '/music/comment'];
router.beforeEach((to, from, next) => {
    if (redirectList.includes(to.path)) {
        next('/')
    } else {
        document.title = to.meta.title && `${to.meta.title} - 在线音乐播放器` || '在线音乐播放器';
        next()
    }
});

const isDebug_mode = process.env.NODE_ENV !== 'production';
Vue.config.silent = isDebug_mode;
Vue.config.debug = isDebug_mode;
Vue.config.devtools = isDebug_mode;
Vue.config.productionTip = isDebug_mode;

Vue.prototype.$playerInfo= require('../package.json')

Vue.filter('urlToHttps', function(value) {
    return value.replace('http','https')
});

// 版权信息
// const pkg = require('../package.json');
// window.mmPlayer = window.mmplayer = `欢迎使用 mmPlayer!
// 当前版本为：V${pkg.version}
// 作者：茂茂
// Github：https://github.com/maomao1996/Vue-mmPlayer
// 歌曲来源于网易云音乐 (http://music.163.com)`;
// console.info(`%c${mmPlayer}`, `color:blue`);

/* eslint-disable no-new */
new Vue({
    el: '#app',
    store,
    router,
    components: {App},
    template: '<App/>'
})
