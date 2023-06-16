import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'


// 创建一个新的应用实例
// 参数App是一个“根组件”
// 可以创建多个应用实例
const app = createApp(App) 

app.use(createPinia())
app.use(router)

// 应用配置 - 应用级的错误处理器
app.config.errorHandler = (err)=>{
    console.error("App Config ErrorHandler: ",err);
}

// 应用配置 - 应用级的可用资源
import Hi from "./demo/Hi.vue"
app.component("Hi",Hi);


// 挂载应用
// 应用实例必须在调用了mount()方法后才会渲染
// 参数是一个“容器”，可以是DOM，也可以是css选择器
// 注意此处的'#app'指向的是index.html，而不是/src/App.vue。此处的意思是应用实例会被渲染到index.html的#app元素中
// 所有配置和注册要在mount()之前调用完成。
// 返回值是根组件实例，不是应用实例
app.mount('#app')
